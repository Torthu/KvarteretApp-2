function openArranger(arrangerId) {
        console.log('opening arranger with id: ' + arrangerId);

        // see if view is already generated and in the stack
        if(Ext.getCmp('singleArrangerWrapper-' + arrangerId)) {
            stackForward(Ext.getCmp('singleArrangerWrapper-' + arrangerId));

        } else {

            // get arranger data
            var arrangerStore = Ext.getStore('Arranger');
            var arrangerData = arrangerStore.getAt( arrangerStore.find("id", arrangerId) ).data;

            // create instance of singleArrangerWrapper
            var singleArrangerWrapper = Ext.create('KvarteretApp.view.SingleArrangerWrapper', {
                id: 'singleArrangerWrapper-' + arrangerId
            });

            // create instance of Arranger (arranger information view) with data from selected arranger
            var arranger = Ext.create('KvarteretApp.view.Arranger', {
                data: arrangerData,   
                scrollable: false
            });


            /*  Check if events for arranger exists,
                if not create a new store as a copy of KvarteretApp.store.Event with appropriate filter
                store is destroyed in KvarteretApp.controllers.Main.stackBack() 
            */
            var localEventStore = Ext.getStore('eventStore-' + arrangerId);
            if(localEventStore == undefined) {

                var eventStore = Ext.getStore('Event');

                var records = [];
                eventStore.each(function(r){
                    records.push(r.copy());
                });

                console.log('Creating local store with id: eventStore-' + arrangerId);
                localEventStore = new Ext.data.Store({
                    requires: 'KvarteretApp.model.Event',

                    model: 'KvarteretApp.model.Event',
                    id: 'eventStore-' + arrangerId,
                    storeId: 'Event',
                    autoLoad: true,
                    grouper: {
                        sorterFn: function (record){ return record.get('startDate'); },
                        groupFn: function (record) { return record.get('startDate'); } 
                    }
                    
                });

                localEventStore.add(records);

                var arrangerFilter = new Ext.util.Filter({
                    property: 'arranger_id',
                    value   : arrangerId,
                    exactMatch: true
                });

                localEventStore.filter(arrangerFilter);
            } else {
                console.log('Using existing store: ' + localEventStore.getId());
            }

            // create new instance of eventList
            var arrangerEventList = Ext.create('KvarteretApp.view.EventList', {
                store: localEventStore,
                scrollable: false,
                flex: 1
            });

            
            // add everything to wrapper
            singleArrangerWrapper.add({
                xtype: 'panel',
                flex: 1,
                scrollable: 'vertical',
                items: [
                    arranger,
                    arrangerEventList
                ]
            });

            // add to view and set as active
            stackForward(singleArrangerWrapper);
        }

}

Ext.define('KvarteretApp.controller.Arranger', {
    extend: 'Ext.app.Controller',

    config: {
        stores: ['Arranger', 'Event'],
    },

     launch: function() {
        console.log('Arranger controller says hi');

         this.control({

            '#arrangerList':{
                select: function (selectedItem) {
                    openArranger(selectedItem.getSelection()[0].data.id);    
                }
            },
            'button[action=arrangerBack]':{
                tap: function (selectedItem) {
                    stackBack();
                }
            },
            'button[action=openArranger]': {
                tap: function (selectedItem) {
                   openArranger(selectedItem.id);
                }
            },
            'button[action=openArrangerList]': {
                tap: function () {
                    stackForward(Ext.getCmp('arrangerList'));
                }
            }
       });
    }
});
Ext.define('KvarteretApp.controller.Arranger', {
	Extend: 'Ext.app.Controller',
    requires: ['KvarteretApp.view.Event'],
	init: function () {
		console.log('Arranger controller init');

		//KvarteretApp.store.Arranger.load();
	}
});

Ext.define('KvarteretApp.controller.Arranger', {
    extend: 'Ext.app.Controller',

    config: {
        stores: ['Arranger', 'Event'],
    },

    launch: function() {
        console.log('hello');

         this.control({
            /* events */
            '#eventList':{
                select: function (selectedItem) {

                    /*  creates a prototype view using Event view
                        sends in data from selected element which is handled by the views tpl
                    */
                    var event = Ext.create('KvarteretApp.view.Event', {
                        data: selectedItem.getSelection()[0].data
                    });

                    eventWrapper = Ext.getCmp('eventWrapper');
                    eventWrapper.add(event);
                    eventWrapper.setActiveItem(event);

                    eventList = Ext.getCmp('eventList');
                    eventList.deselectAll();
                }
            },
            'button[action=eventBack]':{
                tap: function (selectedItem) {
                    console.log('going back');
                    
                    eventWrapper.remove(Ext.getCmp('event'));
                    eventWrapper.setActiveItem(eventList);

                }
            },

            /* arrangers */
            '#arrangerList':{
                select: function (selectedItem) {
                    console.log('tap');
                    /*  creates a prototype view using Arranger view
                        sends in data from selected element which is handled by the views tpl
                    */
                    var arranger = Ext.create('KvarteretApp.view.Arranger', {
                        data: selectedItem.getSelection()[0].data,
                    });

                    /* filter the store to contain only events for the selected arranger */
                    /*var store = Ext.data.StoreManager.lookup('Event');
                    var arrangerEvents = store.queryBy(function (record, id) {
                        return record.get('arranger_id') == selectedItem.getSelection()[0].data.id;
                    });

                    console.log('arr.id: ' + selectedItem.getSelection()[0].data.id);
                    console.log(store);
                    console.log('filtered store ' + arrangerEvents);*/

                    
                    // get the wrapper
                    arrangerWrapper = Ext.getCmp('arrangerWrapper');

                    // add single arranger view to the wrapper
                    arrangerWrapper.add(arranger);

                    arranger = Ext.getCmp('arranger');

                    // append eventList with filtered events to view
                    arranger.add({
                        xtype: 'eventList',
                        
                    });


                    // make it active
                    arrangerWrapper.setActiveItem(arranger);

                    // deselect the entry in the arrangerList
                    arrangerList = Ext.getCmp('arrangerList');
                    arrangerList.deselectAll();
                }
            },
            'button[action=arrangerBack]':{
                tap: function (selectedItem) {
                    console.log('going back');
                    
                    // destroy the created view
                    arrangerWrapper.remove(Ext.getCmp('arranger'));

                    // set arrangerList as active view
                    arrangerWrapper.setActiveItem(arrangerList);

                }
            },
       });

    }
});
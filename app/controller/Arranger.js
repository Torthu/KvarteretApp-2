Ext.define('KvarteretApp.controller.Arranger', {
    extend: 'Ext.app.Controller',

    config: {
        stores: ['Arranger', 'Event'],
    },

    // refs: {
    //     {}
    // }

    launch: function() {
        console.log('Arranger controller says hi');

         this.control({

            '#arrangerList':{
                select: function (selectedItem) {

                    // create instance of singleArrangerWrapper
                    var singleArrangerWrapper = Ext.create('KvarteretApp.view.SingleArrangerWrapper', {
                    });

                    // create instance of Arranger (arranger information view) with data from selected arranger
                    var arranger = Ext.create('KvarteretApp.view.Arranger', {
                        data: selectedItem.getSelection()[0].data,   
                        scrollable: false
                    });



                    // get Event store and set filter to display only the selected arranger's events
                    var store = Ext.getStore('Event');
                    store.filter("arranger_id", selectedItem.getSelection()[0].data.id);

                    // create new instance of eventList
                    var arrangerEventList = Ext.create('KvarteretApp.view.EventList', {
                        store: store,
                        id: 'arrangerEventList',
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


                    // get the wrapper
                    // arrangerWrapper = Ext.getCmp('arrangerWrapper');

                    // add single arranger view to the wrapper
                    Ext.Viewport.add(singleArrangerWrapper);
                    
                    // make it active
                    Ext.Viewport.setActiveItem(singleArrangerWrapper);

                    // deselect the entry in the arrangerList
                    arrangerList = Ext.getCmp('arrangerList');

                    arrangerList.deselectAll();
                }
            },
            'button[action=arrangerBack]':{
                tap: function (selectedItem) {
                    // destroy the created view
                    // arrangerWrapper.remove(Ext.getCmp('arranger'));
                    Ext.Viewport.remove(Ext.getCmp('singleArrangerWrapper'));

                    Ext.getStore('Event').clearFilter();

                    // set arrangerList as active view
                    // arrangerWrapper.setActiveItem(arrangerList);
                    Ext.Viewport.setActiveItem(Ext.getCmp('main'));
                }
            },
       });
    }
});
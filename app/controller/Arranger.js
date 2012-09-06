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
                    if(Ext.getCmp('singleArrangerWrapper-' + selectedItem.getSelection()[0].data.id)) {
                        stackForward(Ext.getCmp('singleArrangerWrapper-' + selectedItem.getSelection()[0].data.id));

                    } else {
                        // create instance of singleArrangerWrapper
                        var singleArrangerWrapper = Ext.create('KvarteretApp.view.SingleArrangerWrapper', {
                            id: 'singleArrangerWrapper-' + selectedItem.getSelection()[0].data.id,
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

                        // add single arranger view to the wrapper
                        Ext.Viewport.add(singleArrangerWrapper); // add to stack function?
                        
                        // make it active
                        // Ext.Viewport.setActiveItem(singleArrangerWrapper);

                        // this.getApplication().fireEvent('stackForward', singleArrangerWrapper);
                        stackForward(singleArrangerWrapper);

                        // deselect the entry in the arrangerList
                        arrangerList = Ext.getCmp('arrangerList');

                        arrangerList.deselectAll();
                    }
                }
            },
            'button[action=arrangerBack]':{
                tap: function (selectedItem) {
                    // destroy the created view
                    // arrangerWrapper.remove(Ext.getCmp('arranger'));
                    // Ext.Viewport.remove(Ext.getCmp('singleArrangerWrapper'));

                    Ext.getStore('Event').clearFilter();

                    stackBack();

                    // set arrangerList as active view
                    // arrangerWrapper.setActiveItem(arrangerList);
                    // Ext.Viewport.setActiveItem(Ext.getCmp('main'));
                }
            },
            'button[action=openArranger]': {
                tap: function (selectedItem) {
                    console.log('opening arranger with id: ' + selectedItem.id);

                    if(Ext.getCmp('singleArrangerWrapper-' + selectedItem.id)) {
                        stackForward(Ext.getCmp('singleArrangerWrapper-' + selectedItem.id));

                    } else {

                        var arrangerStore = Ext.getStore('Arranger');
                        var arrangerData = arrangerStore.getAt( arrangerStore.find("id", selectedItem.id) ).data;

                        // create instance of singleArrangerWrapper
                        var singleArrangerWrapper = Ext.create('KvarteretApp.view.SingleArrangerWrapper', {
                            id: 'singleArrangerWrapper-' + selectedItem.id
                        });

                        // create instance of Arranger (arranger information view) with data from selected arranger
                        var arranger = Ext.create('KvarteretApp.view.Arranger', {
                            data: arrangerData,   
                            scrollable: false
                        });



                        // get Event store and set filter to display only the selected arranger's events
                        var store = Ext.getStore('Event');
                        store.filter("arranger_id", selectedItem.id);

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
                        Ext.Viewport.add(singleArrangerWrapper); // add to stack function?
                        
                        // make it active
                        // Ext.Viewport.setActiveItem(singleArrangerWrapper);

                        // this.getApplication().fireEvent('stackForward', singleArrangerWrapper);
                        stackForward(singleArrangerWrapper);
                    }
                }
            }
       });
    }
});
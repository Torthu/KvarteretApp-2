Ext.define('KvarteretApp.controller.Festival', {
    extend: 'Ext.app.Controller',

    config: {
        stores: ['Festival'],
    },

    launch: function() {
        console.log('Festival controller says hi');

         this.control({
            /* events */
            '.festivalList': {
                select: function (selectedItem) {

                    /*  creates a prototype view using Festival view
                        sends in data from selected element which is handled by the views tpl
                    */

                    if(Ext.getCmp('festival-' + selectedItem.getSelection()[0].data.id)) {
                    	stackForward(Ext.getCmp('festival-' + selectedItem.getSelection()[0].data.id));
                    } else {
	                    var festival = Ext.create('KvarteretApp.view.Festival', {
	                        data: selectedItem.getSelection()[0].data,
	                        id: 'festival-' + selectedItem.getSelection()[0].data.id
	                    });

	                    var eventStore = Ext.getStore('Event');
	                    eventStore.filter("festival_id", selectedItem.getSelection()[0].data.id);

                        // create new instance of eventList
                        var eventList = Ext.create('KvarteretApp.view.EventList', {
                        	data: eventStore.getData(),
                            // store: eventStore,
                            scrollable: false,
                            flex: 1
                        });

                        eventStore.clearFilter();

                        
                        festival.add(eventList);

                        var arrangerStore = Ext.getStore('Arranger');

                        var arrangerData = [];

                        console.log(selectedItem.getSelection()[0].data.arrangers);

                        for(arrangerId in selectedItem.getSelection()[0].data.arrangers) {
                        	arrangerData.push( arrangerStore.getAt( arrangerStore.find("id", arrangerId.id) ));
                        	console.log(arrangerId.id);
                        	console.log(arrangerStore.getAt( arrangerStore.find("id", arrangerId.id)));
                        }
	                   

	                    console.log(arrangerData);

	                    for(arranger in arrangerData) {
	                    	festival.add({
		                    	xtype: 'button',
		                    	text: arranger.name,
		                    	action: "openArranger",
		                    	id: arranger.id
	                    	});
	                    }
	                    
	                    
	                    stackForward(festival);

	                    festivalList = Ext.getCmp('festivalList');
	                    festivalList.deselectAll();
	                }
                }
            },

            'button[action=festivalBack]':{
                tap: function (selectedItem) {
                    


                    // eventWrapper.remove(Ext.getCmp('event'));
                    // eventWrapper.setActiveItem(eventList);
                    // Ext.Viewport.remove(Ext.getCmp('event'));
                    // Ext.Viewport.setActiveItem(Ext.getCmp('main'));

                    stackBack();

                }
            }
       });
	}


});
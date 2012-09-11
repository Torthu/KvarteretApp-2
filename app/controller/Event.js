Ext.define('KvarteretApp.controller.Event', {
    extend: 'Ext.app.Controller',

    config: {
        stores: ['Event'],
    },

    launch: function() {
        console.log('Event controller says hi');

         this.control({
            /* events */
            '.eventList': {
                select: function (selectedItem) {

                    /*  creates a prototype view using Event view
                        sends in data from selected element which is handled by the views tpl
                    */

                    if(Ext.getCmp('event-' + selectedItem.getSelection()[0].data.id)) {
                    	stackForward(Ext.getCmp('event-' + selectedItem.getSelection()[0].data.id));
                    } else {

                    	// create wrapper for events
                    	// var singleEventWrapper = Ext.create('KvarteretApp.view.SingleEventWrapper', {
                    	// 	id: 'event-' + selectedItem.getSelection()[0].data.id,
                    		
                    	// });

                    	// get festival data
	                    if(selectedItem.getSelection()[0].data.festival_id) {
	                    	var festivalStore = Ext.getStore('Festival');
	                   		var festivalData = festivalStore.getAt( festivalStore.find("id", selectedItem.getSelection()[0].data.festival_id) ).data;
	                    }

	                    // get arranger data
	                    // if(selectedItem.getSelection()[0].data.arranger_id) {
	                    // 	var arrangerStore = Ext.getStore('Arranger');
	                   	// 	var arrangerData = arrangerStore.getAt( arrangerStore.find("id", selectedItem.getSelection()[0].data.arranger_id) ).data;
	                    // }

	                    var event = Ext.create('KvarteretApp.view.Event', {
	                    	data: selectedItem.getSelection()[0].data,
	                    	flex: 1,
	                    	id: 'event-' + selectedItem.getSelection()[0].data.id
	                    });

	                   
	                    // add everything to wrapper
	                    // singleEventWrapper.add(event);

	                    // deselect item in list
	                  	Ext.getCmp('eventList').deselectAll();

	                  	// add to stack and display
	                    stackForward(event);
	                }
                }
            },

            'button[action=eventBack]':{
                tap: function (selectedItem) {
                    
                    // eventWrapper.remove(Ext.getCmp('event'));
                    // eventWrapper.setActiveItem(eventList);
                    // Ext.Viewport.remove(Ext.getCmp('event'));
                    // Ext.Viewport.setActiveItem(Ext.getCmp('main'));

                    stackBack();

                }
            },
            'button[action=openEventList]': {
                tap: function () {
                    stackForward(Ext.getCmp('eventList'));
                }
            }
       });
	}


});
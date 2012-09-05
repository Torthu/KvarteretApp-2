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
	                    var event = Ext.create('KvarteretApp.view.Event', {
	                        data: selectedItem.getSelection()[0].data,
	                        id: 'event-' + selectedItem.getSelection()[0].data.id
	                    });

	                    if(selectedItem.getSelection()[0].data.festival_id) {
	                    	console.log('festival!');
	                    }

	                    if(selectedItem.getSelection()[0].data.arranger_id) {
	                    	console.log(selectedItem.getSelection()[0].data.arranger_id);
	                    }

	                    var arrangerStore = Ext.getStore('Arranger');
	                    var arrangerData = arrangerStore.getAt( arrangerStore.find("id", selectedItem.getSelection()[0].data.arranger_id) ).data;

	                    event.add({
	                    	xtype: 'button',
	                    	text: arrangerData.name,
	                    	action: "openArranger",
	                    	id: selectedItem.getSelection()[0].data.arranger_id
	                    });

	                    // eventWrapper = Ext.getCmp('eventWrapper');
	                    // eventWrapper.add(event);
	                    // eventWrapper.setActiveItem(event);

	                    // Ext.Viewport.add(event);
	                                       
	                    // make it active
	                    // Ext.Viewport.setActiveItem(event);
	                    stackForward(event);

	                    eventList = Ext.getCmp('eventList');
	                    eventList.deselectAll();
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
            }
       });
	}


});
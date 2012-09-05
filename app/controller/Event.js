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
                    var event = Ext.create('KvarteretApp.view.Event', {
                        data: selectedItem.getSelection()[0].data,
                        id: 'event'
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
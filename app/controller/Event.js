Ext.define('KvarteretApp.controller.Event', {
    extend: 'Ext.app.Controller',

    config: {
        stores: ['Event'],
    },

    launch: function() {
        console.log('Event controller says hi');

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
            }
       });
	}


});
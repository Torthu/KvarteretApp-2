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
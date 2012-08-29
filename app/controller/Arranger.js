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
        stores: ['Arranger'],
    },

    launch: function() {
        console.log('hello');

         this.control({
            '#eventList':{
                select: function (selectedItem) {

                    /*  creates a prototype view using Event view
                        sends in data from selected element which is handled by the views tpl
                    */
                    var event = Ext.create('KvarteretApp.view.Event', {
                        data: selectedItem.getSelection()[0].data
                    });

                    eventWrapper = Ext.getCmp('eventWrapper');
                    console.log(eventWrapper);
                    eventWrapper.add(event);
                    eventWrapper.setActiveItem(event);
                }
            },
            'button[action=eventBack]':{
                tap: function (selectedItem) {
                    console.log('going back');
                    
                    eventWrapper.remove(Ext.getCmp('event'));
                    eventWrapper.setActiveItem(Ext.getCmp('eventList'));

                }
            },
       });

    }
});
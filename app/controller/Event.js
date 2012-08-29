Ext.define('KvarteretApp.controller.Event', {
	Extend: 'Ext.app.Controller',

	config: {
        stores: ['Arranger'],
        //models: ['Event'],
        //views: ['Event']
    },

	/*onItemSelect: function(selection){

		console.log('selected something');
        //var myItem = selection.getSelection()[0];
		
	},*/

	init: function () {
		console.log('Event controller init');

		/*this.control({
            '#eventList':{
                select: this.onItemSelect
            },
       });*/
	},
});
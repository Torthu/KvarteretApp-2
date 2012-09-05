Ext.define('KvarteretApp.controller.Main', {
    extend: 'Ext.app.Controller',

    

    // refs: {
    //     {}
    // }

    launch: function() {
    	console.log('Main controller says hi')
    	

    	// not working, should implement instead of hackish functions
    	// this.control({
    	// 	'': {
    	// 		stackForward: function(view) {
    	// 			console.log('event triggered');
					// KvarteretApp.push(viewName);
					// Ext.Viewport.setActiveItem(viewName);
    	// 		}
    	// 	}
    	// });
    }

});

KvarteretApp.Stack = ['main'];

function stackForward(view) {
	KvarteretApp.Stack.push(view.getId());
	Ext.Viewport.setActiveItem(view);
}

function stackBack(view) {
	console.log('going back');

	Ext.Viewport.setActiveItem(Ext.getCmp(KvarteretApp.Stack[KvarteretApp.Stack.length-2]));

	Ext.Viewport.remove(Ext.getCmp(KvarteretApp.Stack[KvarteretApp.Stack.length-1]));

	KvarteretApp.Stack.pop();

	
}

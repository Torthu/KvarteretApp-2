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
	console.log('going forward');
	KvarteretApp.Stack.push(view.getId());
	Ext.Viewport.setActiveItem(view);
}

/*	Destroys active view in order to free up the DOM
	Destroys potential ad hoc store */
function stackBack(view) {
	console.log('going back');

	var viewToRemove = KvarteretApp.Stack[KvarteretApp.Stack.length-1];

	var storeIdToRemove = "eventStore" + viewToRemove.substr(viewToRemove.indexOf('-'));

	Ext.Viewport.setActiveItem(Ext.getCmp(KvarteretApp.Stack[KvarteretApp.Stack.length-2]));

	KvarteretApp.Stack.pop();

	// check if view is still in stack, if not: remove
	if(!Ext.Array.contains(KvarteretApp.Stack, viewToRemove)) {
		console.log('Trying to remove view with id: ' + viewToRemove);
		Ext.Viewport.remove(Ext.getCmp(viewToRemove));

		// check if view has a local store, if true: remove
		var storeToRemove = Ext.getStore(storeIdToRemove);
		if(storeToRemove != undefined) {
			console.log('Trying to remove store with id: ' + storeIdToRemove);
			Ext.getStore(storeToRemove).destroy();
		}
	}

	
}

/*	Phonegap
	-------- */
document.addEventListener("backbutton", stackBack, false);

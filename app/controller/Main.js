Ext.define('KvarteretApp.controller.Main', {
    extend: 'Ext.app.Controller',

    

    // refs: {
    //     {}
    // }

    launch: function() {
    	console.log('Main controller says hi');

    	// remove festivallist and store if no festivals exist
    	// if(Ext.getStore('Festival').getTotalCount() == null) {
    	// 	console.log('KvarteretApp.controller.Main: No festivals found, removing view and store from DOM');
    	// 	// Ext.getCmp('main').remove(Ext.getCmp('festivalList'));
    	// 	Ext.getStore('Festival').destroy();
    	// }

    	this.control({
    		'button[action=mainMenu]': {
    			tap: function () {
    				openMenu();
    				
    			}
    		}
	    });
    }

});

KvarteretApp.Stack = ['mainMenu', 'arrangerList', 'eventList'];

function openMenu() {

	if(KvarteretApp.Stack[KvarteretApp.Stack.length-1] != "mainMenu") {
		if(!inStack('mainMenu')) {
			stackForward(Ext.create('KvarteretApp.view.MainMenu'));
		} else {
			stackForward(Ext.getCmp('mainMenu'));
		}
	} else {
		stackBack();
	}

	
}

function inStack(viewId) {
	return Ext.Array.contains(KvarteretApp.Stack, viewId);
}

function stackForward(view) {
	console.log('KvarteretApp.controller.Main.stackForward: going forward');

	// add view to viewport
	if(!inStack(view.getId())) {
		Ext.Viewport.add(view);
	}

	// add view to stack
	KvarteretApp.Stack.push(view.getId());

	// set view as active
	Ext.Viewport.setActiveItem(view);
}

/*	Destroys active view in order to free up the DOM
	Destroys potential ad hoc store */
function stackBack(view) {
	console.log('KvarteretApp.controller.Main.stackBack: going back');

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

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

    	// add initial views to Viewport
    	 Ext.Viewport.add(
    	 	{
	            xtype: 'titlebar',
	            id: 'mainBar',
	            docked: 'top',
	            pack: 'justify',
	            items: [
	                {
	                    xtype: 'button',
	                    action: 'mainMenu',
	                    id: 'mainMenuButton',
	                    text: 'menu',
	                    align: 'left',

	                },
	                {
	                    xtype: 'panel',
	                    html: '<img src="resources/icons/logo.png" alt="" />',
	                    align: 'center',
	                    flex: 1

	                },
	                {
	                    xtype: 'button',
	                    action: 'done',
	                    id: 'doneButton',
	                    text: 'done',
	                    align: 'right'

	                }
	            ]
       		}
       	);

    	Ext.Viewport.add(
    	 	{
            	xtype:'eventList', 
            	id: 'eventList'
            }
        );
        Ext.Viewport.add(
            {
                xtype:'arrangerList',
                id: 'arrangerList'
            }
        );
        Ext.Viewport.add(
            {
                xtype: 'festivalList',
                id: 'festivalList'
            }
        );
        Ext.Viewport.add(
            {
                xtype: 'mainMenu'
            }
        );
    	this.control({
    		'button[action=mainMenu]': {
    			tap: function () {
    				openMenu();
    				
    			}
    		},
    		'button[action=openKvarteretInfo]': {
                tap: function () {
                    stackForward(Ext.create('KvarteretApp.view.Kvarteret'));
                }
            },
            'button[action=openAppInfo]': {
                tap: function () {
                    stackForward(Ext.create('KvarteretApp.view.TheApp'));
                }
            },
            'button[action=openFestivalList]': {
                tap: function () {
                    stackForward(Ext.getCmp('festivalList'));
                }
            }
	    });
    }

});

KvarteretApp.Stack = ['arrangerList', 'eventList'];

function openMenu() {
	// is mainmenu the active card?
	if(KvarteretApp.Stack[KvarteretApp.Stack.length-1] != "mainMenu") {
		// is mainmenu in the stack at all?

		if(Ext.getCmp('mainMenu') == undefined) {
			console.log('not in stack');
			stackForward(Ext.create('KvarteretApp.view.MainMenu')); // add mainmenu

		} else {
			console.log(Ext.getCmp('mainMenu'));
			stackForward(Ext.getCmp('mainMenu')); // set mainmenu as active

		}
	} else {
		stackBack(); // remove mainmenu
	}
	
}

function showStack() {
	console.log(KvarteretApp.Stack);
}

function inStack(viewId) {
	return Ext.Array.contains(KvarteretApp.Stack, viewId);
}

function stackForward(view) {
	console.log('KvarteretApp.controller.Main.stackForward: going forward');

	if(view == undefined) {
		console.error('ERROR: View sent to stackForward was undefined.')
	}

	// add view to viewport
	if(!inStack(view.getId())) {
		Ext.Viewport.add(view);
	}

	if(view.getId() != "eventList" && view.getId() != "arrangerList") {

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
	if(inStack(viewToRemove) && viewToRemove != 'arrangerList' && viewToRemove != 'eventList') {
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

Ext.define("KvarteretApp.view.Menu", {
    extend: 'Ext.tab.Panel',
	xtype: 'panel',
	config: {

		tabBarPosition: 'bottom',
	    xtype: 'menu',
	    items: [
	        {
	        	xtype: 'panel',
	        	html: 'Upcoming Events',
	        	action: 'openEventList',
	        	cls: 'menu_item'
	        },
	        {
	        	xtype: 'panel',
	        	html: 'Arrangers',
	        	action: 'openArrangerList',
	        	cls: 'menu_item' 
	        },
	        {
	        	xtype: 'panel',
	        	html: 'Festivals',
	        	action: 'openFestivalList',
	        	cls: 'menu_item'   
	        },
	        {
	        	xtype: 'panel',
	        	html: 'About Kvarteret',
	        	action: 'openKvarteretInfo',
	        	cls: 'menu_item'   
	        },
	        {
	        	xtype: 'panel',
	        	html: 'About the app',
	        	action: 'openAppInfo',
	        	cls: 'menu_item'   
	        }
	    ]
    }  
   
});
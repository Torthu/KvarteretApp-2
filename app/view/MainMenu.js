Ext.define("KvarteretApp.view.MainMenu", {
    extend: 'Ext.Panel',
    xtype: 'mainMenu',
	config: {
	    id: 'mainMenu',
	    items: [
	        {
	        	xtype: 'button',
	        	html: 'Upcoming Events',
	        	action: 'openEventList',
	        	cls: 'menu_item'
	        },
	        {
	        	xtype: 'button',
	        	html: 'Arrangers',
	        	action: 'openArrangerList',
	        	cls: 'menu_item' 
	        },
	        {
	        	xtype: 'button',
	        	html: 'Festivals',
	        	action: 'openFestivalList',
	        	cls: 'menu_item'   
	        },
	        {
	        	xtype: 'button',
	        	html: 'About Kvarteret',
	        	action: 'openKvarteretInfo',
	        	cls: 'menu_item'   
	        },
	        {
	        	xtype: 'button',
	        	html: 'About the app',
	        	action: 'openAppInfo',
	        	cls: 'menu_item'   
	        }
	    ]
    }  
   
});
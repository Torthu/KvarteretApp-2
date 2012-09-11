Ext.define("KvarteretApp.view.FestivalList", {
    extend: 'Ext.List',
    xtype: 'festivalList',
    config: {
        title: 'Festivals',       
        itemTpl: '{title}',
        store: 'Festival',
        items: [
        	{ 
        		xtype: 'panel',
        		docked: 'top',
        		html: '<h1 class="black_background text_center">Upcoming Festivals</h1>'
        	}
        ]
    },

});
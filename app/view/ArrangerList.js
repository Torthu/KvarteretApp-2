Ext.define("KvarteretApp.view.ArrangerList", {
    extend: 'Ext.List',
    xtype: 'arrangerList',
    config: {
        title: 'Arrangers',       
        itemTpl: '{name}',
        store: 'Arranger',
        sorters: 'name',
        items: [
        	{ 
        		xtype: 'panel',
        		docked: 'top',
        		html: '<h1 class="black_background text_center">Arrangers</h1>'
        	}
        ]
    }

});
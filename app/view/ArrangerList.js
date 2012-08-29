Ext.define("KvarteretApp.view.ArrangerList", {
    extend: 'Ext.List',
    xtype: 'arrangerList',
    config: {
    	id: 'arrangerList',
        title: 'Arrangers',       
        itemTpl: '<img src="{logoUrl}" style="width: auto;height:60px;" /><strong>{name}</strong>',
        store: 'Arranger',
        sorters: 'name'
    }

});
Ext.define("KvarteretApp.view.ArrangerList", {
    extend: 'Ext.List',
    xtype: 'arrangerList',
    config: {
    	itemCls: 'arrangerLstItm',
        title: 'Arrangers',       
        itemTpl: '<img src="{logoUrl}" style="width: auto;height:60px;" /><strong>{name}</strong>',
        store: 'Arranger',
        sorters: 'name',
        
        listeners: {
	        select: function(view, record) { 
	            var arranger = Ext.create('KvarteretApp.view.Arranger', {

	            });

	            arranger.setHtml(
	            	'<h1>' + record.get('name') + '</h1>' +
	            	'<p>' + record.get('id') + '</p>'
	            );

	            Ext.Viewport.add(arranger);
	            Ext.Viewport.setActiveItem(arranger);
	        }
   		}
    }

});
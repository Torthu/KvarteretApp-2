Ext.define('KvarteretApp.model.Category', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
        	'id', 
        	'name'
        ],
        
        proxy: {
            type: 'jsonp',
            url: 'http://events.kvarteret.no/api/json/category/list',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    }
});
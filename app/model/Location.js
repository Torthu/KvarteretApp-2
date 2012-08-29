Ext.define('KvarteretApp.model.Location', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
        	'id', 
        	'name', 
        	'logo', 
        	'lft', 
        	'rgt', 
        	'level', 
        	'root_id'
        ],
        
        proxy: {
            type: 'jsonp',
            url: 'http://events.kvarteret.no/api/json/location/list',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    }
});
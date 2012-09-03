Ext.define('KvarteretApp.model.Arranger', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
        	'id', 
        	'name', 
        	'logo',
            'description',
            {name: 'logoUrl', mapping: 'logo.thumb.url'}
        ],
        
        proxy: {
            type: 'jsonp',
            url: 'http://events.kvarteret.no/api/json/arranger/list',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    }
});
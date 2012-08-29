Ext.define('KvarteretApp.model.Festival', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
        	'id', 
        	'title', 
        	'leadParagraph', 
        	'description', 
        	'linkout', 
        	'startDate', 
        	'startTime', 
        	'endDate', 
        	'endTime', 
        	'customLocation', 
        	'location_id', 
        	'covercharge', 
        	'created_at', 
        	'updated_at', 
        	'commonLocation', 
        	'arrangers', 
        	'url', 
        	'ical'
        ],
        
        proxy: {
            type: 'jsonp',
            url: 'http://events.kvarteret.no/api/json/festival/list',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    }
});
Ext.define('KvarteretApp.model.Event', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
        	'id', 
        	'url', 
        	'ical', 
        	'title', 
        	'leadParagraph', 
        	'description', 
        	'linkout', // ?
        	'startDate', 
        	'startTime', 
        	'endDate', 
        	'endTime', 
            {name: 'age_limit', defaultValue: '18 år m/ studentbevis ellers 20 år'}, 
        	'customLocation', 
        	'location_id', 
        	'arranger_id', 
        	'festival_id', 
        	'created_at', 
        	'updated_at', 
        	'commonLocation', 
        	'arranger', 
        	'categories', 
        	'festival', 
        	'primaryPicture', 
        	{name: 'covercharge', defaultValue: 'uspesifisert'},
            {name: 'primaryPictureUrl', mapping: 'pimaryPicture["url"]', defaultValue: 'trololol'}
        ],

       
        
        proxy: {
            type: 'jsonp',
            url: 'http://events.kvarteret.no/api/json/filteredEvents/list',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    }
});
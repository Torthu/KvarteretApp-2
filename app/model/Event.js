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
            {name: 'startDateString', type: 'date',  convert: function (v, record) {
                var date = new Date(record.startDate);
                return date.toLocaleDateString();
            }},
            {name: 'endDateString', type: 'date', dateFormat: 'Y-m-d'}, 
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
            {name: 'primaryPictureUrl', mapping: 'pimaryPicture.url', defaultValue: ''}
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
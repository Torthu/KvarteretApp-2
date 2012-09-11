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
                startDate = new Date(record.data.startDate);

                return startDate.toLocaleDateString();
            }},
            'startTime',
            {name: 'startTimeShort', type: 'string',  convert: function (v, record) {
                console.log(record);
                return record.data.startTime.substr(0,5);
            }},
        	'endDate',
             {name: 'endDateString', type: 'date',  convert: function (v, record) {
                
                if(record.data.endDate == record.data.startDate) {
                    return "";
                }

                var date = new Date(record.data.startDate);
                return date.toLocaleDateString();
            }},
        	'endTime',
            {name: 'endTimeShort', type: 'string',  convert: function (v, record) {
                console.log(record);
                return record.data.endTime.substr(0,5);
            }},
            {name: 'age_limit', defaultValue: '20, 18 m/ studentbevis'}, 
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
            {name: 'primaryPictureUrl', type:'string', convert: function (v, record) {
                if(record.data.primaryPicture) {
                    return '<img src="' + record.data.primaryPicture.url + '" alt="" style="width: auto;max-height:200px" />';
                }
                return '';
            }}
        ],

       
        
        proxy: {
            type: 'jsonp',
            url: 'http://events.kvarteret.no/api/json/filteredEvents/list?limit=100',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    }
});
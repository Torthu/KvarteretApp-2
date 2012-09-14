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
                // startDate = new Date(record.data.startDate); (bugged in iOS, shame on you, Apple!)
                // console.log(record.data.startDate + ": " + record.data.startDate.substr(0,4) + " " + record.data.startDate.substr(5,2) + " " + record.data.startDate.substr(8,2));
                startDate = new Date(record.data.startDate.substr(0,4), record.data.startDate.substr(5,2), record.data.startDate.substr(8,2));
                return startDate.toLocaleDateString();
            }},
            'startTime',
            {name: 'startTimeShort', type: 'string',  convert: function (v, record) {
                return record.data.startTime.substr(0,5);
            }},
        	'endDate',
             {name: 'endDateString', type: 'date',  convert: function (v, record) {
                
                if(record.data.endDate == record.data.startDate) {
                    return "";
                }

                // var date = new Date(record.data.startDate);
                var date = new Date(record.data.endDate.substr(0,4), record.data.endDate.substr(5,2), record.data.endDate.substr(8,2));
                return date.toLocaleDateString();
            }},
        	'endTime',
            {name: 'endTimeShort', type: 'string',  convert: function (v, record) {
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
            {name: 'locationName', type:'string', convert: function (v, record) {
                if(record.data.customLocation) {
                    return record.data.customLocation;
                }
                return record.data.commonLocation.name;
            }},
        	'arranger',
            {name: 'arrangerName', type: 'string', mapping: 'arranger.name'},
        	'categories', 
            {name: 'categoriesString', type: 'string', convert: function (v, record) {

                var categoryString = [];
                for(i=0; i<record.data.categories.length; i++) {
                    categoryString.push(record.data.categories[i].name);
                }
                return categoryString.join(", ");
                
            }},
        	'festival', 
        	'primaryPicture', 
        	{name: 'covercharge', defaultValue: 'uspesifisert'},
            {name: 'primaryPictureUrl', type:'string', convert: function (v, record) {
                if(record.data.primaryPicture) {
                    return '<img src="' + record.data.primaryPicture.url + '" alt="" style="width: auto" />';
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
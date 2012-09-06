Ext.define("KvarteretApp.view.Festival", {
    extend: 'Ext.Panel',
    requires: ['Ext.Toolbar', 'Ext.Button'],
    xtype: 'festival',

    config: {
        Title: 'Festival',
        xtype: 'festival',
        layout: 'vbox',
        fullscreen: 'true',

        scrollable: 'vertical',
			// 'id', 
   //      	'title', 
   //      	'leadParagraph', 
   //      	'description', 
   //      	'linkout', 
   //      	'startDate', 
   //      	'startTime', 
   //      	'endDate', 
   //      	'endTime', 
   //      	'customLocation', 
   //      	'location_id', 
   //      	'covercharge', 
   //      	'created_at', 
   //      	'updated_at', 
   //      	'commonLocation', 
   //      	'arrangers', 
   //      	'url', 
   //      	'ical'
        tpl: [
        	'<div class="singleFestival wrapper">',

				'<h1 class="text_center">{title}</h1>',
				'<div class="date text_center">{startDate} - {endDate}</div>',
				'<div class="left half text_center meta">CC: {covercharge}</div>',
				'<div class="right half text_center meta">Age: {age_limit}</div>',
				'<div class="lead">{leadParagraph}</div>',
				'<div class="description">{description}</div>',
			'</div>',
			'<h2>Events</h2>'
		],
		items: [
			{	
				xtype:'toolbar',
				title: "KvarteretApp",
				docked:'top',
				items: [ {xtype:'button', ui:'back',text:'back', cls:'backButton', action:"festivalBack"} ],
			}
		]
    }
});
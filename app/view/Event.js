Ext.define("KvarteretApp.view.Event", {
    extend: 'Ext.Panel',
    requires: ['Ext.Toolbar', 'Ext.Button'],
    xtype: 'event',

    config: {
        Title: 'Event',
        xtype: 'event',
        layout: 'vbox',
        id: 'event',
        fullscreen: 'true',

        scrollable: 'vertical',

        tpl: [
        	'<div class="singleEvent wrapper">',
			'	<div class="clearfix imageWrapper">',
					'<img src="{primaryPictureUrl}" />',
					'<h1 class="text_center">{title}</h1>',
					'<div class="date text_center">{startDateString} kl. {startTimeShort} - {endDateString}{endTimeShort}</div>',
				'</div>',
				'<div class="left half text_center meta">CC: {covercharge}</div>',
				'<div class="right half text_center meta">Age: {age_limit}</div>',
				'<div class="lead">{leadParagraph}</div>',
				'<div class="description">{description}</div>',
			'</div>',
			'<h3>Arrangør</h3>'
		],
		items: [
			{	
				xtype:'toolbar',
				title: "KvarteretApp",
				docked:'top',
				items: [ {xtype:'button', ui:'back',text:'back', cls:'backButton', action:"eventBack"} ],
			}
		]
    }
});
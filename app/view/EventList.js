Ext.define("KvarteretApp.view.EventList", {
    extend: 'Ext.List',
    xtype: 'eventList',
    alias:'widget.eventList',

    config: {
        title: 'Events',       
        itemTpl: '<h2>{title}</h2>' +
        		 '<small>{startDate} {startTime} - {endDate} {endTime}</small>',
        store: 'Event',

        sorters: 'startDate',
        grouped: true	
        
	            /*event.setHtml(
	            	
	            	'<h1>' + record.get('title') + '</h1>' +
	            	'<small>' + 
	            		record.get('startDate').substr(0,5) + ' ' + 
	            		record.get('startTime').substr(0,5) + ' - ' + 
	            		record.get('endDate').substr(0,5) + ' ' + 
	            		record.get('endTime').substr(0,5) + 
	            		' ' + processedCats + 
	            	'</small>' +
	            	//'<strong>' + record.get('leadDescription') + '</strong>' +
	            	'<p>' + record.get('description') + '</p>'
	            );*/
    },
});
Ext.define("KvarteretApp.view.EventList", {
    extend: 'Ext.List',
    xtype: 'eventList',
    alias:'widget.eventList',

    config: {
        title: 'Events',       
        itemTpl: '<h2>{title}</h2>' +
        		 '<small>{startTimeShort} - {category} @ {location}</small>',
        store: 'Event',
        cls: 'eventList',

        sorters: 'startDate',
        grouped: true	
    },
});
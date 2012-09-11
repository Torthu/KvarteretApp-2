Ext.define("KvarteretApp.view.EventList", {
    extend: 'Ext.List',
    xtype: 'eventList',
    alias:'widget.eventList',

    config: {
        title: 'Events',       
        itemTpl: '<h2>{title}</h2>' +
        		 '<small>{startTimeShort} - {categoriesString} @ {locationName}<br />CC: {covercharge}</small>',
        store: 'Event',
        cls: 'eventList',

        sorters: 'startDate',
        grouped: true,
        items: [
            { 
                xtype: 'panel',
                docked: 'top',
                html: '<h1 class="black_background text_center">Upcoming Events</h1>'
            }
        ]
    },
});
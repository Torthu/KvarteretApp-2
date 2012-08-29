Ext.define("KvarteretApp.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'KvarteretApp.view.EventList'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                id: 'eventWrapper',
                xtype: 'panel',
                title: 'Event',
                layout: 'card',
                scroll: 'vertical',
                items: [ {xtype:'eventList'}]
            },
            {
                xtype: 'arrangerList'
            },
            {
                xtype: 'festivalList'
            }
        ]
    }
});
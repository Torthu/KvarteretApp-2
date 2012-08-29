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
                title: 'Events',
                layout: 'card',
                items: [ {xtype:'eventList', id:'eventList'}]
            },
            {
                id: 'arrangerWrapper',
                xtype: 'panel',
                title: 'Arrangers',
                layout: 'card',
                items: [ {xtype:'arrangerList'}]
            },
            {
                xtype: 'festivalList'
            }
        ]
    }
});
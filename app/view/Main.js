Ext.define("KvarteretApp.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'KvarteretApp.view.EventList'
    ],

      xtype: 'tabpanel',
      config: {
        tabBarPosition: 'bottom',
        id: 'main',
        items: [
            {
              xtype:'eventList', 
              id:'eventList'
            },
            {
                xtype:'arrangerList',
                id: 'arrangerList'
            },
            {
                xtype: 'festivalList',
                id: 'festivalList'
            }
        ]
    }  
   
});
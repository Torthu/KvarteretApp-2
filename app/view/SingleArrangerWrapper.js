Ext.define("KvarteretApp.view.SingleArrangerWrapper", {
    extend: 'Ext.Panel',
    xtype: 'singleArrangerWrapper',
    config: {
        Title: 'Arranger',
        
        layout: 'vbox',
        id: 'singleArrangerWrapper',
        fullscreen: 'true',
		// align: 'stretch',
        scrollable: false,

        items: [
            {   
                xtype:'toolbar',
                title: "KvarteretApp",
                docked:'top',
                items: [ {xtype:'button', ui:'back',text:'back', cls:'backButton', action:"arrangerBack"} ],
            }         
        ]
    }
});
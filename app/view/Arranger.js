Ext.define("KvarteretApp.view.Arranger", {
    extend: 'Ext.Panel',
    xtype: 'arranger',
    config: {
        Title: 'Arranger',
        xtype: 'arranger',
        layout: 'vbox',
        id: 'arranger',
        fullscreen: 'true',

        scrollable: 'vertical',

        tpl: [
            '<div class="singleArranger wrapper">',
            '   <div class="clearfix imageWrapper">',
                    '<img src="{logoUrl}" />',
                    '<h1 class="text_center">{title}</h1>',
                '</div>',
                '<h2>Events</h2>',
            '</div>'
        ],
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
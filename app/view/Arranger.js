Ext.define("KvarteretApp.view.Arranger", {
    extend: 'Ext.Panel',
    xtype: 'arranger',
    config: {
        Title: 'Arranger',
        
        // layout: 'vbox',
        id: 'arranger',
        // fullscreen: 'true',

        // scrollable: 'vertical',

        tpl: [
            '<div class="singleArranger wrapper">',
            '   <div class="clearfix imageWrapper">',
                    '<img src="{logoUrl}" />',
                    '<h1 class="text_center">{name}</h1>',
                    '<p class="description">{description}</p>',
                '</div>',
            '</div>'
        ]
    }
});
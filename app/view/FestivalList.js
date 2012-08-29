Ext.define("KvarteretApp.view.FestivalList", {
    extend: 'Ext.List',
    xtype: 'festivalList',
    config: {
        title: 'Festivals',       
        itemTpl: '{name}',
        store: 'Festival'
    },

});
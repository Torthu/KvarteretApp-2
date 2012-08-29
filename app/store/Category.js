Ext.define('KvarteretApp.store.Category', {
    extend: 'Ext.data.Store',
    requires: 'KvarteretApp.model.Category',

    config: {
        model: 'KvarteretApp.model.Category',
        autoLoad: true
    }
});
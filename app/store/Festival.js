Ext.define('KvarteretApp.store.Festival', {
    extend: 'Ext.data.Store',
    requires: 'KvarteretApp.model.Festival',

    config: {
        model: 'KvarteretApp.model.Festival',
        autoLoad: true
    }
});
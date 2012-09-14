Ext.define('KvarteretApp.store.Location', {
    extend: 'Ext.data.Store',
    requires: 'KvarteretApp.model.LOcation',

    config: {
        model: 'KvarteretApp.model.Location',
        autoLoad: false
    }
});
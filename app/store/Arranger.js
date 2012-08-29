Ext.define('KvarteretApp.store.Arranger', {
    extend: 'Ext.data.Store',
    requires: 'KvarteretApp.model.Arranger',

    config: {
        model: 'KvarteretApp.model.Arranger',
        autoLoad: true
    }
});
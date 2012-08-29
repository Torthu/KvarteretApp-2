Ext.define('KvarteretApp.store.Event', {
    extend: 'Ext.data.Store',
    requires: 'KvarteretApp.model.Event',

    config: {
        model: 'KvarteretApp.model.Event',
        id: 'eventStore',
        storeId: 'Event',
        autoLoad: true,
        grouper: {
            sorterFn: function (record){ return record.get('startDate'); },
            groupFn: function (record) { return record.get('startDate'); } 
        }
    }
});
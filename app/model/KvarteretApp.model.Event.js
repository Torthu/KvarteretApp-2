Ext.define('KvarteretApp.model.Event', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id', 'url', 'cal', 'title', 'leadParagraph', 'description', 'linkout', 'startDate', 'startTime', 'endDate', 'endTime', 'is_accepted', 'is_public', 'customLocation', 'location_id', 'arranger_id', 'festival_id', 'created_at', 'updated_at', 'commonLocation', 'arranger', 'categories', 'festival', 'primaryPicture', 'pictures', 'covercharge']
    }
});
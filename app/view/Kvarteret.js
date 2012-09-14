Ext.define("KvarteretApp.view.Kvarteret", {
    extend: 'Ext.Panel',
    xtype: 'kvarteretInfo',
    config: {
        Title: 'Kvarteret',
        id: 'kvarteretInfo',
        html:   '<h1>Det Akademiske Kvarter</h1>' +
                'Det Akademiske Kvarter (The Academic Quarter) is a student house run by volunteers who provide the students of Bergen with concerts, happenings, food and drinks monday through saturday each week. Check out the official website at <a href="http://kvarteret.no">Kvarteret.no</a> for more information.'
                
    }
});
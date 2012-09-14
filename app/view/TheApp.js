Ext.define("KvarteretApp.view.TheApp", {
    extend: 'Ext.Panel',
    xtype: 'appInfo',
    config: {
        Title: 'About the Application',
        id: 'appInfo',
        html:   '<h1>The Application</h1>' +
                '<p>The Kvarteret Application is created and maintained by Torstein Thune as a personal project. It is in no way affiliated with Det Akademiske Kvarter.</p>' +
                '<p>Like the app? Why not suggest <a href="http://thunemedia.no">Thune Media</a> the next time a friend or a colleague needs a website or an application, or better yet why not buy me a beer?</p>' +
                '<h2 class="black">Technical</h2><p>The application is based on Sencha Touch, a Javascript framework for creating web applications i addition to PhoneGap in order to provide native functionality.</p>' +
                '<p>Found a bug or think you can do better? Check out the <a href="https://github.com/Torthu/KvarteretApp-2">source code</a> and the <a href="http://evnents.kvarteret.no/api">event system API</a>.</p>' +
                '<p>Want to discuss the app? Come join me at <a href="https://www.facebook.com/pilsprog">Pils & programmering</a>.</p>'
    }
});
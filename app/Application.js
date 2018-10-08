/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */

function loadLocale() {
    // var lang = localStorage ? (localStorage.getItem('user-lang') ||   'ru') : 'ru',
    //     file = Ext.util.Format.format("resources/locale/{0}.js", lang);
    //
    // Ext.Loader.loadScript({url: file, onError: function(){
    //         alert('Error loading locale file. Please contact system administrator.');
    //     }});
    var lang = localStorage ? (localStorage.getItem('user-lang') || 'en') : 'en',
        //file = Ext.util.Format.format("resources/locale/{0}.js", lang),
        extJsFile = Ext.util.Format.format("ext/packages/ext-locale/build/ext-locale-{0}.js", lang);

    /*Ext.Loader.loadScript({url: file, onError: function(){
        alert('Error loading locale file. Please contact system administrator.');
    }});*/
    Ext.Loader.loadScript({url: extJsFile});
}

loadLocale();

Ext.define('Packt.Application', {
    extend: 'Ext.app.Application',

    requires: [
        'Packt.view.login.Login'
    ],

    name: 'Packt',
    glyphFontFamily: 'FontAwesome',
    //   quickTips: false,
    enableQuickTips: true,


    stores: [
        // TODO: add global / shared stores here
    ],
    controllers: [
        // 'Root',
        'Menu',
        'StaticData'

    ],
    defaultToken : 'home',
    init: function () {
        var me = this; // #1
        me.splashscreen = Ext.getBody().mask('Loading application', 'splashscreen');

    },
    launch: function () {

        var me = this;
        me.splashscreen.fadeOut({
            duration: 0,
            remove: true
        });

        Ext.widget('login-dialog');
        //me.getView().mask('Loading... Please wait...');


        // console.log('App launched');

        // TODO - Launch the application
    }

});

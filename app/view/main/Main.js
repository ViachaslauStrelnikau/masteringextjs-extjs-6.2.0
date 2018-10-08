/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Packt.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',
    plugins: 'viewport',

    requires: [
        'Ext.container.Container',
        'Ext.layout.container.Border',
        'Ext.plugin.Responsive',
        'Ext.plugin.Viewport',
        'Packt.view.main.Footer',
        'Packt.view.main.Header',
        'Packt.view.main.MainController',
        'Packt.view.main.MainModel',
        'Packt.view.main.Panel',
        'Packt.view.menu.Accordion'
    ],

    controller: 'main',
    viewModel: 'main',
    layout: {
        type: 'border'
    },
    items: [{
        region: 'center',   // #1
        xtype: 'mainpanel'
    },{
        xtype: 'appheader', // #2
        region: 'north'
    },{
        xtype: 'appfooter', // #3
        region: 'south'
    },{
        xtype:'mainmenu',
        region: 'west',
        plugins: 'responsive',
        responsiveConfig: {
            'width < 768 && tall': {
                visible: false
            },
            'width >= 768': {
                visible: true
            }
        }
    }]
});

/**
 * Created by Odmin on 05.10.2018.
 */
Ext.define('Packt.view.main.ResponsiveMenuButton', {
    extend: 'Ext.button.Split',
    xtype: 'responsive-mainmenu',
    requires: [
        'Ext.menu.Menu',
        'Ext.plugin.Responsive',
        'Packt.view.menu.Accordion'
    ],
    text: 'Menu',
    plugins: 'responsive',
    responsiveConfig: {
        'width < 768 && tall': {
            visible: true
        },
        'width >= 768': {
            visible: false
        }
    },
    menu: {
        xtype: 'menu',
        items: [{
            xtype: 'mainmenu'
        }]
    }
});
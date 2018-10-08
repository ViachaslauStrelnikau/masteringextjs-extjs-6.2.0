/**
 * Created by Odmin on 22.08.2018.
 */
Ext.define('Packt.view.locale.Translation', {
    extend: 'Ext.button.Split',
    xtype:'translation',

    requires: [
        'Packt.view.locale.TranslationController'
    ],
    controller: 'translation',
    menu: {               //#3
        xtype: 'menu',    //#4
        items: [
            {
                xtype: 'menuitem', //#5
                iconCls: 'ru',
                text: 'Русский'
            },
            {
                xtype: 'menuitem', //#6
                iconCls: 'en',
                text: 'English'
            }]
        ,
        defaults:{
            listeners: {
                click: 'onMenuItemClick'
            }
        }
    }

});
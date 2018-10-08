/**
 * Created by Odmin on 28.09.2018.
 */
Ext.define('Packt.view.base.WindowForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowform',
    requires: [
        'Ext.layout.container.Fit',
        'Packt.view.base.CancelSaveToolbar'
    ],
    height: 400,
    width: 550,
    autoScroll: true,
    layout: {
        type: 'fit'
    },
    modal: true,
    closable: false,
    bind: {
        title: '{title}', //#1
        glyph: '{glyph}'  //#2
    },
    dockedItems: [{
        xtype: 'cancel-save-toolbar'
    }]
});
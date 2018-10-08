/**
 * Created by Odmin on 28.09.2018.
 */
Ext.define('Packt.view.base.CancelSaveToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'cancel-save-toolbar',
    requires: [
        'Packt.util.Glyphs'
    ],
    dock: 'bottom',
    ui: 'footer',
    layout: {
        pack: 'end',
        type: 'hbox'
    },
    items: [
        {
            xtype: 'button',
            text: 'Save',
            glyph: Packt.util.Glyphs.getGlyph('save'),
            listeners: {
                click: 'onSave' //#3
            }
        },
        {
            xtype: 'button',
            text: 'Cancel',
            glyph: Packt.util.Glyphs.getGlyph('cancel'),
            listeners: {
                click: 'onCancel' //#4
            }
        }
    ]
});
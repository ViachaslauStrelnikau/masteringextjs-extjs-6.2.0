/**
 * Created by Odmin on 30.08.2018.
 */
Ext.define('Packt.view.security.User', {
    extend: 'Ext.panel.Panel',
    xtype: 'user',
    requires: [
        'Ext.layout.container.VBox',
        'Packt.view.security.UsersGrid',
        'Packt.view.security.UserModel',
        'Packt.view.security.UserController',
        'Packt.util.Glyphs'
        //#1
    ],
    controller: 'user', //#2
    viewModel: {        //#3
        type: 'user'
    },
    frame: true,        //#4
    layout: {           //#5
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'users-grid', //#6
            flex: 1              //#7
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top', //#1
            items: [
                {
                    xtype: 'button',
                    text: 'Add',
                    glyph: Packt.util.Glyphs.getGlyph('add'),
                    listeners: {
                        click: 'onAdd' //#3
                    }
                },
                {
                    xtype: 'button',
                    text: 'Edit',

                    glyph: Packt.util.Glyphs.getGlyph('edit'),
                    bind: {
                        disabled: '{!usersGrid.selection}'
                    },
                    listeners: {
                        click: 'onEdit'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Delete',
                    bind: {
                        disabled: '{!usersGrid.selection}'
                    },
                    glyph: Packt.util.Glyphs.getGlyph('destroy'),
                    listeners: {
                        click: 'onDelete'
                    }
                }
            ]
        }
    ]
});
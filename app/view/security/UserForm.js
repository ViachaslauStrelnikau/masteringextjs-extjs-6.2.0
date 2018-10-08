/**
 * Created by Odmin on 31.08.2018.
 */
Ext.define('Packt.view.security.UserForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.user-form',

    height: 400,
    width: 600,
    requires: [
        'Ext.form.FieldSet',
        'Ext.form.Panel',
        'Ext.form.field.Hidden',
        'Ext.form.field.Text',
        'Ext.layout.container.Anchor',
        'Ext.layout.container.Fit',
        'Ext.layout.container.HBox',
        'Packt.util.Util'
    ],
    layout: {
        type: 'fit'
    },
    bind: {
        title: '{title}' //#1
    },
    closable: false,
    modal: true,

    items: [
        {
            xtype: 'form',
            reference: 'form',
            bodyPadding: 5,
            modelValidation: true, //#2
            layout: {
                type: 'hbox',      //#3
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'fieldset',
                    flex: 1,                   //#4
                    title: 'User Information',
                    layout: 'anchor',          //#5
                    defaults: {
                        afterLabelTextTpl: Packt.util.Util.required, //#6
                        anchor: '100%',                              //#7
                        xtype: 'textfield',
                        msgTarget: 'side',
                        labelWidth: 75
                    },
                    items: [
                        {
                            xtype: 'hiddenfield',
                            name: 'id',               //#8
                            fieldLabel: 'Label',
                            bind: '{currentUser.id}' //#9
                        },
                        {
                            fieldLabel: 'Username',
                            name: 'userName',
                            bind: '{currentUser.userName}'
                        },
                        {
                            fieldLabel: 'Name',
                            name: 'name',
                            bind: '{currentUser.name}'
                        },
                        {
                            fieldLabel: 'Email',
                            name: 'email',
                            bind: '{currentUser.email}'
                        },
                        {
                            xtype: 'combo',
                            fieldLabel: 'Group',
                            displayField: 'name',  //#10
                            valueField: 'id',      //#11
                            queryMode: 'local',    //#12
                            forceSelection: true,  //#13
                            editable: false,       //#14
                            name: 'groups_id',
                            bind: {
                                value: '{currentUser.groups_id}', //#15
                                store: '{groups}',                //#16
                                selection: '{currentUser.group}'  //#17
                            }
                        },
                        {
                            xtype: 'filefield',
                            fieldLabel: 'Photo',
                            name: 'picture',
                            buttonText: 'Select Photo...',
                            afterLabelTextTpl: '',          //#18
                            listeners: {
                                change: 'onFileFieldChange' //#19
                            }
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Photo',
                    width: 170,  //#19
                    items: [
                        {
                            xtype: 'image',
                            reference: 'userPicture', //#20
                            height: 150,
                            width: 150,
                            bind: {
                                src:
                                    'resources/profileImages/{currentUser.picture}'
                                //#21
                            }
                        }
                    ]
                }

            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            layout: {
                pack: 'end', //#22
                type: 'hbox'
            },
            items: [
                {
                    xtype: 'button',
                    text: 'Save',
                    glyph: Packt.util.Glyphs.getGlyph('save'),
                    listeners: {
                        click: 'onSave'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Cancel',
                    glyph: Packt.util.Glyphs.getGlyph('cancel'),
                    listeners: {
                        click: 'onCancel'
                    }
                }
            ]
        }
    ]
});
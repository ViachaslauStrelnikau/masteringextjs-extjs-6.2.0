/**
 * Created by Odmin on 25.09.2018.
 */
Ext.define('Packt.view.staticData.Languages', {
    extend: 'Packt.view.staticData.BaseGrid',
    xtype:'languagesgrid',

    requires: [
        'Packt.store.staticData.Languages'
    ],

    store:{
        type:'languages'
    },
    columns: [
        {
            text: 'Language Id',
            width: 100,
            dataIndex: 'language_id',
            filter: {
                type: 'numeric'
            }
        },
        {
            text: 'Language Name',
            flex: 1,
            dataIndex: 'name',
            editor: {
                allowBlank: false,
                maxLength: 20
            },
            filter: {
                type: 'string'
            }
        }
    ]
});
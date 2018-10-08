/**
 * Created by Odmin on 24.09.2018.
 */
Ext.define('Packt.view.staticData.Cities', {
    extend: 'Packt.view.staticData.BaseGrid',
    xtype:'citiesgrid',
    requires: [
        'Packt.store.staticData.Cities'
    ],

    store:{
       type:'city'
    },

    columns: [
        {
            text: 'City Id',
            width: 100,
            dataIndex: 'city_id',
            filter: {
                type: 'numeric'   //#3
            }
        },
        {
            text: 'City',
            flex: 1,
            dataIndex: 'city',
            editor: {
                allowBlank: false, //#4
                maxLength: 50      //#5
            },
            filter: {
                type: 'string'     //#6
            }
        },
        {
            text: 'Country Id',
            width: 100,
            dataIndex: 'country_id',
            editor: {
                allowBlank: false, //#7
            },
            filter: {
                type: 'numeric'     //#9
            }
        }
    ]
});
/**
 * Created by Odmin on 25.09.2018.
 */
Ext.define('Packt.view.staticData.Countries', {
    extend: 'Packt.view.staticData.BaseGrid',
    xtype:'countriesgrid',

    requires: [
        'Packt.store.staticData.Countries'
    ],

    store:{
        type:'countries'
    },
    /*
    Uncomment to give this component an xtype
    xtype: 'countries',
    */

    columns: [
        {
            text: 'Country Id',
            width: 100,
            dataIndex: 'country_id',
            filter: {
                type: 'numeric'   //#3
            }
        },
        {
            text: 'Country',
            flex: 1,
            dataIndex: 'country',
            editor: {
                allowBlank: false, //#4
                maxLength: 50      //#5
            },
            filter: {
                type: 'string'     //#6
            }
        }
    ]
});
/**
 * Created by Odmin on 24.09.2018.
 */
Ext.define('Packt.view.staticData.Actors', {
    extend: 'Packt.view.staticData.BaseGrid',
    xtype: 'actorsgrid',        //#1
    requires: [
        'Packt.store.staticData.Actors'
    ],
     store: {type:'actors'},
    //  store: Ext.create(  'Packt.store.staticData.Actors'), //#2
    columns: [
        {
            text: 'Actor Id',
            width: 100,
            dataIndex: 'actor_id',
            filter: {
                type: 'numeric'   //#3
            }
        },
        {
            text: 'First Name',
            flex: 1,
            dataIndex: 'first_name',
            editor: {
                allowBlank: false, //#4
                maxLength: 45      //#5
            },
            filter: {
                type: 'string'     //#6
            }
        },
        {
            text: 'Last Name',
            width: 200,
            dataIndex: 'last_name',
            editor: {
                allowBlank: false, //#7
                maxLength: 45      //#8
            },
            filter: {
                type: 'string'     //#9
            }
        }
    ]
});
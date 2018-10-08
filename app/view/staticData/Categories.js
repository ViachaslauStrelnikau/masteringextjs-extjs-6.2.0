Ext.define('Packt.view.staticData.Categories', {
    extend: 'Packt.view.staticData.BaseGrid',
    xtype: 'categoriesgrid',

    requires: [
        'Packt.store.staticData.Categories'
    ],

    store:{type:'category'},

    columns: [
        {
            text: 'Category Id',
            width: 100,
            dataIndex: 'category_id',
            filter: {
                type: 'numeric'
            }
        },
        {
            text: 'Category Name',
            flex: 1,
            dataIndex: 'name',
            editor: {
                allowBlank: false,
                maxLength: 25
            },
            filter: {
                type: 'string'
            }
        }
    ]
});
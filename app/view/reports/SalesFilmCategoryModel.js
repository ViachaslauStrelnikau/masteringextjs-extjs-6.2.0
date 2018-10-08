/**
 * Created by Odmin on 05.10.2018.
 */
Ext.define('Packt.view.reports.SalesFilmCategoryModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.sales-film-category',

    requires: [
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    stores: {
        salesFilmCategory: {
            fields: [                  // #1
                {name: 'category'},
                {name: 'total_sales'}
            ],
            autoLoad: true,
            proxy: {                  // #2
                type: 'ajax',
                url: 'php/reports/salesFilmCategory.php',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }
    }
});
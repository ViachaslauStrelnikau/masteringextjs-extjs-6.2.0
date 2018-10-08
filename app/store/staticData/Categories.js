/**
 * Created by Odmin on 21.09.2018.
 */
Ext.define('Packt.store.staticData.Categories', {
    extend: 'Packt.store.staticData.Base',

    alias: 'store.category',
    storeId: 'storecategory',
    requires: [
        'Packt.model.staticData.Category'
    ],

    model:'Packt.model.staticData.Category'
});
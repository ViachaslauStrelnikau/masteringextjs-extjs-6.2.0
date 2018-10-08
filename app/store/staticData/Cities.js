/**
 * Created by Odmin on 21.09.2018.
 */
Ext.define('Packt.store.staticData.Cities', {
    extend: 'Packt.store.staticData.Base',
    alias:'store.city',
    storeId: 'storecity',
    requires: [
        'Packt.model.staticData.City'
    ],

    model: 'Packt.model.staticData.City'
});



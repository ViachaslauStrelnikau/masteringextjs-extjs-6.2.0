/**
 * Created by Odmin on 21.09.2018.
 */
Ext.define('Packt.store.staticData.Countries', {
    extend: 'Packt.store.staticData.Base',
    alias:'store.countries',
    storeId: 'storecountries',
    requires: [
        'Packt.model.staticData.Country'
    ],

    model: 'Packt.model.staticData.Country'
});


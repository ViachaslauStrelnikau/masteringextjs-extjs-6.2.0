/**
 * Created by Odmin on 21.09.2018.
 */
Ext.define('Packt.store.staticData.Languages', {
    extend: 'Packt.store.staticData.Base',

    alias:'store.languages',
    storeId: 'storelanguages',
    requires: [
        'Packt.model.staticData.Language'
    ],

    model: 'Packt.model.staticData.Language'
});


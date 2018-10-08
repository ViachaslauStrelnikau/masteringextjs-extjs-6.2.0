/**
 * Created by Odmin on 21.09.2018.
 */
Ext.define('Packt.store.staticData.Actors', {
    extend: 'Packt.store.staticData.Base',

    alias: 'store.actors',
    storeId: 'storeactors',
    requires: [
        'Packt.model.staticData.Actor'
    ],

    model:'Packt.model.staticData.Actor'

});
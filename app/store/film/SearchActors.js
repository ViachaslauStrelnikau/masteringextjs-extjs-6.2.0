/**
 * Created by Odmin on 28.09.2018.
 */
Ext.define('Packt.store.film.SearchActors', {
    extend: 'Ext.data.Store',

    requires: [
        'Packt.model.film.SearchActor'
    ],


    model: 'Packt.model.film.SearchActor',
    alias: 'store.search-actors',
    pageSize: 5,
    proxy: {
        type: 'ajax',
        url: 'php/actor/searchActors.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});
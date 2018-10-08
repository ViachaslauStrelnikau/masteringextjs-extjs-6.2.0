/**
 * Created by Odmin on 27.09.2018.
 */
Ext.define('Packt.model.film.Film', {
    extend: 'Packt.model.staticData.Base',
    entityName: 'Film',

    idProperty: 'film_id',
    fields: [
        {name: 'film_id'},
        {name: 'title'},
        {name: 'description'},
        {name: 'release_year', type: 'int'},
        {name: 'language_id'},
        {name: 'original_language_id'},
        {name: 'rental_duration', type: 'int'},
        {name: 'rental_rate', type: 'float'},
        {name: 'length', type: 'int'},
        {name: 'replacement_cost', type: 'float'},
        {name: 'rating'},
        {name: 'special_features'}


    ],
    manyToMany: {
        FilmCategories: {         //#1
            type: 'Category',     //#2
            role: 'categories',   //#3
            field: 'category_id', //#4
            right: {
                field: 'film_id', //#5
                role: 'films'     //#6
            }
        },
        FilmActors: {
            type: 'Actor',
            role: 'actors',
            field: 'actor_id',
            right: {
                field: 'film_id',
                role: 'films'
            }
        }
    }
});
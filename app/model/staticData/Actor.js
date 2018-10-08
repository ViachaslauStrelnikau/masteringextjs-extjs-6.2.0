/**
 * Created by Odmin on 21.09.2018.
 */
Ext.define('Packt.model.staticData.Actor', {
    extend: 'Packt.model.staticData.Base',//#1

    requires: [
        'Ext.data.validator.Length',
        'Ext.data.validator.Presence'
    ],

    entityName: 'Actor', //#2
    idProperty: 'actor_id', //#3
    fields: [
        { name: 'actor_id' },
        { name: 'first_name'},
        { name: 'last_name'}
    ],
    validators: {
        first_name: [
            { type: 'presence', message: 'This field is mandatory'},
            { type: 'length', min: 2, max: 45}
        ],
        last_name: [
            { type: 'presence', message: 'This field is mandatory'},
            { type: 'length', min: 2, max: 45}
        ]
    },
    manyToMany: {
        ActorFilms: {
            type: 'Film',
            role: 'films',
            field: 'film_id',
            right: {
                field: 'actor_id',
                role: 'actors'
            }
        }
    }
});
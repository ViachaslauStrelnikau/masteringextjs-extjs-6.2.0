/**
 * Created by Odmin on 27.09.2018.
 */
Ext.define('Packt.view.film.FilmsModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.films',

    requires: [
        'Packt.model.TextCombo',
        'Packt.model.film.Film'
    ],

    stores: {
        films: {
            model: 'Packt.model.film.Film',
            pageSize: 15,
            autoLoad: true,
            session: true
        },
        categories: {
            source: 'storecategory',
            autoLoad: true,
            session: true
        },
        actors: {
            source: 'storeactors',
            autoLoad: true,
            session: true
        },
        ratings: {
            model: 'Packt.model.TextCombo',
            data : [ // ENUM('G','PG','PG-13','R','NC-17')
                ['G'],
                ['PG'],
                ['PG-13'],
                ['R'],
                ['NC-17']
            ],
            session: true
        },
        special_features: {
            model: 'Packt.model.TextCombo',
            data : [
                ['Trailers'],
                ['Commentaries'],
                ['Deleted Scenes'],
                ['Behind the Scenes']
            ],
            session: true
        }
    },
    formulas: {
        specialFeatures : { //#1
            bind: {
                bindTo: '{currentFilm.special_features}', //#2
                // value: '{currentFilm.special_features}', //#2
                deep: true                                //#3
            },
            get: function(value){ //#4
                var values = value ? value.split(',') : [],
                    texts = [];
                values.forEach(function(item){
                    texts.push(Ext.create('Packt.model.TextCombo',{
                        text: item
                    }));
                });
                return texts;
            },
            set: function(value){ //#5
                if (value){
                    this.get('currentFilm').set('special_features',  value.join());
                }
            }
        }
    },
    data: {
        /* This object holds the arbitrary data that populates the ViewModel and is then available for binding. */
    }
});
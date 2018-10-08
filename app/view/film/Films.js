/**
 * Created by Odmin on 27.09.2018.
 */
Ext.define('Packt.view.film.Films', {
    extend: 'Ext.panel.Panel',
    xtype: 'films',

    requires: [
        'Ext.container.Container',
        'Ext.layout.container.HBox',
        'Ext.layout.container.VBox',
        'Packt.view.base.TopToolBar',
        'Packt.view.film.FilmActorsGrid',
        'Packt.view.film.FilmCategoriesGrid',
        'Packt.view.film.FilmsController',
        'Packt.view.film.FilmsGrid',
        'Packt.view.film.FilmsModel'
    ],

    controller: 'films', //#1

    viewModel: {
        type: 'films'    //#2
    },

    session: true,       //#3

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'films-grid',  //#4
            flex: 1
        },
        {
            xtype: 'container',
            split: true,
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            height: 150,
            items:
                [
                    {
                        xtype: 'film-categories', //#5
                        flex: 1
                    },
                    {
                        xtype: 'film-actors',    //#6
                        flex: 2
                    }
                ]
        }
    ],
    dockedItems: [{
        xtype: 'top-tool-bar'    //#7
    }]
});
/**
 * Created by Odmin on 28.09.2018.
 */
Ext.define('Packt.view.film.FilmWindow', {
        extend: 'Packt.view.base.WindowForm', //#1
        xtype: 'film-window',                 //#2
    requires: [
        'Ext.form.Panel',
        'Ext.tab.Panel',
        'Packt.util.Glyphs',
        'Packt.view.film.FilmFormCategories',
        'Packt.view.film.FilmFormContainer'
    ],
    width: 537,
    height:680,
        items: [
            {
                xtype: 'form',
                reference: 'filmForm',  //#3
                layout: {
                    type: 'fit'
                },
                items:
                    [
                        {
                            xtype: 'tabpanel', //#4
                            activeTab: 0,
                            items:
                                [
                                    {
                                        xtype: 'film-form-container', //#5
                                        glyph: Packt.util.Glyphs.getGlyph('film')
                                    },
                                    {
                                        xtype: 'film-categories-form', //#6
                                        glyph: Packt.util.Glyphs.getGlyph('category')
                                    },
                                    {
                                        xtype: 'film-actors',    //#7
                                        reference: 'actorsGrid', //#8
                                        dockedItems: [{
                                            dock: 'top',
                                            items: [
                                                {
                                                    xtype: 'button',
                                                    text: 'Search and Add',
                                                    glyph: Packt.util.Glyphs.getGlyph('searchAndAdd'),
                                                    listeners: {
                                                        click: 'onAddActor' //#9
                                                    }
                                                },
                                                {
                                                    xtype: 'button',
                                                    text: 'Delete',
                                                    glyph: Packt.util.Glyphs.getGlyph('destroy'),
                                                    listeners: {
                                                        click: 'onDeleteActor' //#10
                                                    }
                                                }
                                            ]
                                        }]
                                    }
                                ]
                        }
                    ]
            }]
    }
);
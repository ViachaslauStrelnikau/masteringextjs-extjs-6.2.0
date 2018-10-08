/**
 * Created by Odmin on 28.09.2018.
 */
Ext.define('Packt.view.film.FilmFormCategories', {
    extend: 'Ext.Container',

    xtype: 'film-categories-form',
    requires: [
        'Ext.layout.container.Fit',
        'Ext.view.MultiSelector',
        'Packt.store.staticData.Categories'
    ],
    title: 'Film Categories',
    layout: 'fit',
    items: [{
        xtype: 'multiselector',
        title: 'Selected Categories',
        reference: 'categoriesMultiSelector',
        fieldName: 'name',
        viewConfig: {
            deferEmptyText: false,
            emptyText: 'No categories selected'
        },
        bind: '{currentFilm.categories}', //#1
        search: {
            field: 'name',
            store: {
                type: 'category', //#2
                autoLoad: true
            }
        }
    }]
});
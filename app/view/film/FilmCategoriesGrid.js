/**
 * Created by Odmin on 28.09.2018.
 */
Ext.define('Packt.view.film.FilmCategoriesGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'film-categories',
    requires: [
        'Packt.util.Glyphs'
    ],
    bind : '{filmsGrid.selection.categories}', //#1
    border: true,
    title: 'Film Categories',
    glyph: Packt.util.Glyphs.getGlyph('category'),
    columns: [
        {
            text: 'Category Id',
            width: 100,
            dataIndex: 'category_id'
        },
        {
            text: 'Category Name',
            flex: 1,
            dataIndex: 'name'
        }
    ]
});
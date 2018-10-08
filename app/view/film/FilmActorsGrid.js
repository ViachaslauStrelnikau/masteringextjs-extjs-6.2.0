/**
 * Created by Odmin on 28.09.2018.
 */
Ext.define('Packt.view.film.FilmActorsGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'film-actors',
    requires: [
        'Ext.grid.column.Template',
        'Packt.util.Glyphs'
    ],
    bind : '{filmsGrid.selection.actors}', //#1
    border: true,
    title: 'Film Actors',
    glyph: Packt.util.Glyphs.getGlyph('actor'),
    columns: [
        {
            text: 'Actor Id',
            width: 80,
            dataIndex: 'actor_id'
        },
        {
            xtype: 'templatecolumn',
            text: 'Actor Name',
            flex: 1,
            tpl: '{first_name} {last_name}' //#2
        }
    ]
});
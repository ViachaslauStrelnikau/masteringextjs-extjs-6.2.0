/**
 * Created by Odmin on 28.09.2018.
 */
Ext.define('Packt.view.film.FilmSearchActor', {
    extend: 'Ext.window.Window',
    xtype: 'search-actor',
    requires: [
        'Ext.form.field.ComboBox',
        'Ext.layout.container.Anchor',
        'Packt.store.film.SearchActors',
        'Packt.store.film.SearchActors',
        'Packt.util.Glyphs'
    ],
    width: 600,
    bodyPadding: 10,
    layout: {
        type: 'anchor'
    },
    title: 'Search and Add Actor',
    autoShow: true,
    closable: false,
    glyph: Packt.util.Glyphs.getGlyph('searchAndAdd'),
    reference: 'search-actor',
    items: [
        {
            //combobox // #1

            xtype: 'combo',
            reference: 'comboActors',   //#2
            displayField: 'first_name', //#3
            valueField: 'actor_id',     //#4
            typeAhead: false,
            hideLabel: true,
            hideTrigger: true,           //#5
            anchor: '100%',
            minChars: 2,                //#6
            pageSize: 5,                //#7
            store: {
                type: 'search-actors'   //#8
            },
            displayTpl: new Ext.XTemplate( //#9
                '<tpl for=".">' + '{[typeof values === "string" ? values : values["last_name"]]}, ' +
                '{[typeof values === "string" ? values : values["first_name"]]}' + '</tpl>'
            ),
            listConfig: {                //#10
                loadingText: 'Searching...',
                emptyText: 'No matching posts found.',
                // Custom rendering template for each item
                getInnerTpl: function () {
                    return '<h3><span>{last_name}, {first_name}</span></h3></br>' + '{film_info}';
                }
            }
        },
        {
            xtype: 'component',
            style: 'margin-top:10px',
            html: 'Live search requires a minimum of 2  characters.'
        }
    ],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        ui: 'footer',
        layout: {
            pack: 'end',
            type: 'hbox'
        },
        items: [
            {
                xtype: 'button',
                text: 'Cancel',
                glyph: Packt.util.Glyphs.getGlyph('cancel'),
                listeners: {
                    click: 'onCancelActors'
                }
            },
            {
                xtype: 'button',
                text: 'Clear',
                glyph: Packt.util.Glyphs.getGlyph('clear'),
                listeners: {
                    click: 'onClearActors'
                }
            },
            {
                xtype: 'button',
                text: 'Add Selected',
                glyph: Packt.util.Glyphs.getGlyph('save'),
                listeners: {
                    click: 'onSaveActors'
                }
            }
        ]
    }]
})

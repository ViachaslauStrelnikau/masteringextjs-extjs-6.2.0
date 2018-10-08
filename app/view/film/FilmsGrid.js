/**
 * Created by Odmin on 27.09.2018.
 */
Ext.define('Packt.view.film.FilmsGrid', {
    extend: 'Packt.view.base.Grid', //#1
    xtype: 'films-grid',

    requires: [
        'Ext.grid.plugin.RowExpander',
        'Ext.toolbar.Paging'
    ],

    bind: '{films}',  //#2

    reference: 'filmsGrid', //#3
    columns: [
        {
            text: 'Film Id',
            width: 80,
            dataIndex: 'film_id'
        },
        {
            text: 'Title',
            flex: 1,
            dataIndex: 'title',
            renderer: function (value, metaData, record) {  //#4
                metaData['tdAttr'] = 'data-qtip="' +
                    record.get('description') + '"'; //#5
                return value;
            }
        },
        {
            text: 'Language',
            width: 100,
            dataIndex: 'language_id',
            renderer: function(value, metaData, record ){
                var languagesStore = Ext.getStore('storelanguages'); //#1
                var lang = languagesStore.findRecord('language_id', value);//#2
                return  lang != 0 ? lang.get('name') : value;            //#3
            }
        },
        {
            text: 'Release Year',
            width: 110,
            dataIndex: 'release_year'
        },
        {
            text: 'Length',
            width: 100,
            dataIndex: 'length',
            renderer: function (value, metaData, record) { //#6
                return value + ' min';
            }
        },
        {
            text: 'Rating',
            width: 70,
            dataIndex: 'rating'
        }],
    dockedItems: [{
        dock: 'bottom',
        xtype: 'pagingtoolbar',
        bind : {
            store: '{films}' //#1
        },
        displayInfo: true,
        displayMsg: 'Displaying films {0} - {1} of {2}',
        emptyMsg: "No films to display"
    }],
    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl: [
            '<b>Description:</b> {description}</br>',
            '<b>Special Features:</b> {special_features}</br>',
            '<b>Rental Duration:</b> {rental_duration}</br>',
            '<b>Rental Rate:</b> {rental_rate}</br>',
            '<b>Replacement Cost:</b> {replacement_cost}</br>'
        ]
    }],
    listeners: {
        itemclick: 'onItemClick',
        selectfilm: 'onFilmSelect'
    }
});
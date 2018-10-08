/**
 * Created by Odmin on 28.09.2018.
 */
Ext.define('Packt.view.film.FilmFormContainer', {
    extend: 'Ext.panel.Panel',
    xtype: 'film-form-container',
    requires: [
        'Ext.form.field.ComboBox',
        'Ext.form.field.Number',
        'Ext.form.field.Tag',
        'Ext.form.field.Text',
        'Ext.form.field.TextArea',
        'Ext.layout.container.Anchor',
        'Packt.util.Util'
    ],
    bodyPadding: 10,
    layout: {
        type: 'anchor'
    },
    title: 'Film Information',
    defaults: {
        anchor: '100%',
        msgTarget: 'side',
        labelWidth: 105
    },
    items: [
        //fields
        {
            xtype: 'textfield',
            fieldLabel: 'Title',
            afterLabelTextTpl: Packt.util.Util.required,
            bind : '{currentFilm.title}' //#1
        },
        {
            xtype: 'numberfield',
            fieldLabel: 'Release Year',
            allowDecimals: false,               //#2
            bind : '{currentFilm.release_year}' //#3
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Language',
            displayField: 'name',
            valueField: 'language_id',
            queryMode: 'local',
            store: 'storelanguages', //#4
            afterLabelTextTpl: Packt.util.Util.required,
            bind : '{currentFilm.language_id}' //#5
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Original Language',
            displayField: 'name',
            valueField: 'language_id',
            queryMode: 'local',
            store: 'storelanguages',
            bind : '{currentFilm.original_language_id}' //#6
        },
        {
            xtype: 'numberfield',
            fieldLabel: 'Rental Duration',
            allowDecimals: false,
            afterLabelTextTpl: Packt.util.Util.required,
            bind : '{currentFilm.rental_duration}'
        },
        {
            xtype: 'numberfield',
            fieldLabel: 'Rental Rate',
            step: 0.1,
            afterLabelTextTpl: Packt.util.Util.required,
            bind : '{currentFilm.rental_rate}'
        },
        {
            xtype: 'numberfield',
            fieldLabel: 'Length (min)',
            allowDecimals: false,
            bind : '{currentFilm.length}'
        },
        {
            xtype: 'numberfield',
            name: 'replacement_cost',
            fieldLabel: 'Replacement Cost',
            step: 0.1,
            afterLabelTextTpl: Packt.util.Util.required,
            bind : '{currentFilm.replacement_cost}'
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Rating',
            displayField: 'text',
            valueField: 'text',
            queryMode: 'local',
            bind: {
                value: '{currentFilm.rating}', //#6
                store: '{ratings}'             //#7
            }
        },
        {
            xtype: 'tagfield',
            fieldLabel: 'Special Features',
            displayField: 'text',
            valueField: 'text',
            filterPickList: true,
            queryMode: 'local',
            publishes: 'value',
            stacked: true,
            bind: {
                value: '{currentFilm.special_features}', //#8
                store: '{special_features}' //#9
            }
        },
        {
            xtype: 'textareafield',
            fieldLabel: 'Description',
            bind : '{currentFilm.description}'
        }
    ]
});
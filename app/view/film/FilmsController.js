/**
 * Created by Odmin on 28.09.2018.
 */
Ext.define('Packt.view.film.FilmsController', {
    extend: 'Packt.view.base.ViewController',
    alias: 'controller.films',

    requires: [
        'Ext.layout.container.Fit',
        'Ext.panel.Panel',
        'Ext.ux.IFrame',
        'Packt.model.film.Film',
        'Packt.util.Glyphs',
        'Packt.ux.grid.Printer',
        'Packt.view.film.FilmSearchActor',
        'Packt.view.film.FilmWindow'
    ],

    /**
     * Called when the view is created
     */
    createDialog: function (record) {

        var me = this;
        view = me.getView();        //#1
        glyphs = Packt.util.Glyphs;
        console.log('createDialog');
        me.isEdit = !!record;           //#2
        me.dialog = view.add({          //#3
            xtype: 'film-window',
            viewModel: {                //#4
                data: {                 //#5
                    title: record ? 'Edit: ' + record.get('title') :
                        'Add Film',
                    glyph: record ? glyphs.getGlyph('edit') : glyphs.getGlyph('add'),
                    currentFilm: record || new Packt.model.film.Film
                }
                // ,
                // links: {                     //#6
                //     // currentFilm: record || new Packt.model.film.Film
                //     // { //#7
                //     //     type: 'Film',
                //     //     create: true
                //     // }
                // }
            },
            session: true //#8
        });
        me.dialog.show(); //#9
    },
    onAddActor: function (button, e, options) {
        var me = this;
        me.searchActors = Ext.create('Packt.view.film.FilmSearchActor');
        me.dialog.add(me.searchActors);
    },
    onSaveActors: function (button, e, options) {
        var me = this,
            value = me.lookupReference('comboActors').getValue(); //#1
        store = me.getStore('actors');//#2
        model = store.findRecord('actor_id', value);         //#3
        actorsGrid = me.lookupReference('actorsGrid');        //#4
        actorsStore = actorsGrid.getStore();                  //#5
//
// // in book version always got 'Cannot modify ext-empty-store' in this moment. Modified to create store.
//         if (actorsStore.storeId && actorsStore.storeId.localeCompare('ext-empty-store') == 0) {
//             actorsStore = Ext.create('Ext.data.Store', {
//                 model: 'Packt.model.staticData.Actor'
//             });
//             actorsGrid.setStore(actorsStore);
//         }
// //-------------------------------------------------------------
//         if (model) {
//             actorsStore.add(model); //#6
//         }
        me.onCancelActors(); //#7
    },
    onCancelActors: function (button, e, options) {
        var me = this;
        me.searchActors = Ext.destroy(me.searchActors);
    },
    onDeleteActor: function (button, e, options) {
        var customerGrid = this.lookupReference('actorsGrid'),
            selection = customerGrid.getSelectionModel().getSelection()[0];

        if (selection)
            selection.drop();
        else if (customerGrid.getStore().getCount() > 0) {
            customerGrid.getStore().removeAt(0);
        }
    }
    ,
    onSave: function (button, e, options) {
        var me = this;
        dialog = me.dialog;
        form = me.lookupReference('filmForm');

        isEdit = me.isEdit;
        session = me.getSession(); //#1
        console.log('session');
        console.log(session);
        id;
        if (form.isValid()) {
            if (!isEdit) {
                id = dialog.getViewModel().get('currentFilm').id; //#2
            }
            dialog.getSession().save(); //#3
            console.log('edit saved!');
            if (!isEdit) {
                me.getStore('films').add(session.getRecord('Film', id)); //#4
            }
            me.onCancel();
        }

        var batch = session.getSaveBatch(); //#5
        console.log('batch');
        console.log(batch);
        if (batch) {
            console.log(batch.start());
            // batch.start();                  //#6
        }
    },
    onExportPDF: function(button, e, options) {
        var mainPanel = Ext.ComponentQuery.query('mainpanel')[0]; //#1
        var newTab = mainPanel.add({
            xtype: 'panel',
            closable: true,
            glyph: Packt.util.Glyphs.getGlyph('pdf'),
            title: 'Films PDF',
            layout: 'fit',
            html: 'loading PDF...',
            items: [{
                xtype: 'uxiframe',                 //#2
                src: 'php/pdf/exportFilmsPdf.php' //#3
            }]
        });
        mainPanel.setActiveTab(newTab); //#4
    },
    onExportExcel: function(button, e, options) {
        window.open('php/pdf/exportFilmsExcel.php');
    },
    onPrint: function(button, e, options) {
        var printer = Packt.ux.grid.Printer;
        printer.printAutomatically = false;
        printer.print(this.lookupReference('filmsGrid'));
    },
    onFilmSelect: function(id){
        var me = this,
            grid = me.lookupReference('filmsGrid'),
            store = me.getStore('films'),
            record = store.findRecord( 'film_id', id );
        if (record){
            grid.getSelectionModel().select(record);
        }
    },
    onItemClick: function( view, record, item, index, e, eOpts ) {
        this.redirectTo('films/' + record.get('film_id'));
    }
});
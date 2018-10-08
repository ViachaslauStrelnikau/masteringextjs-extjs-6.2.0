/**
 * Created by Odmin on 24.09.2018.
 */
Ext.define('Packt.controller.StaticData', {
    extend: 'Ext.app.Controller',
    requires: [
        'Packt.util.Util'
    ],
    stores: [  //#2
        'staticData.Actors',
        'staticData.Categories',
        'staticData.Cities',
        'staticData.Countries',
        'staticData.Languages'
    ],
    views: [ //#3
        'staticData.BaseGrid',
        'staticData.Actors',
        'staticData.Categories',
        'staticData.Cities',
        'staticData.Countries',
        'staticData.Languages'
    ],
    listen: {
        //listen to events using GlobalEvents
        global: {
            widgetclickdelete: 'onWidgetClickDelete'
        },
        store: {
            '#storeactors': {
                write: 'onStoreSync'
            }
        }
    },
    init: function (application) {
        var me = this;
        me.control({

            'staticdatagrid button#add': {
                click: me.onButtonClickAdd
            },
            'staticdatagrid button#save': {
                click: me.onButtonClickSave
            },
            'staticdatagrid button#cancel': {
                click: me.onButtonClickCancel
            },
            // 'staticdatagrid button#clearFilter': {
            //     click: me.onButtonClickClearFilter
            // },
            'citiesgrid button#clearGrouping': {
                toggle: me.onButtonToggleClearGrouping
            },
            "staticdatagrid": {
                edit: me.onEdit
            }

            //event listeners here
        });
        // me.listen({
        //     store: {
        //         '#staticData.Actors': {
        //             write: this.onStoreSync
        //         }
        //     }
        // });
    },

    onButtonClickAdd: function (button, e, options) {
        console.log('onButtonClickAdd!');
        var grid = button.up('staticdatagrid'), //#1
            store = grid.getStore(),            //#2
            modelName = store.getModel().getName(), //#3
            cellEditing = grid.getPlugin('cellplugin');  //#4
        store.insert(0, Ext.create(modelName, { //#5
            last_update: new Date()             //#6
        }));
        cellEditing.startEditByPosition({row: 0, column: 1}); //#7
    },

    onEdit: function (editor, context, options) {
        console.log('onEdit!');
    //    context.record.set('last_update', new Date());
    },

    onWidgetClickDelete: function (grid, button) {
        console.log('onWidgetClick!');
        var store = grid.getStore(),
            rec = button.getWidgetRecord();

        store.remove(rec);
        Packt.util.Util.showToast('Record deleted!'); //#9
    },
    onButtonClickSave: function (button, e, options) {
        console.log('onButtonClickSave!');
        var grid = button.up('staticdatagrid'), //#1
            store = grid.getStore();          //#2
            errors = grid.validate();           //#3
        if (errors === undefined){  //#4
            store.sync();           //#5
        } else {
            Ext.Msg.alert(errors);  //#6
        }
    },
    onButtonClickCancel: function (button, e, options) {
        console.log('onButtonClickCancel!');
        button.up('staticdatagrid').getStore().reload();
    },
    onButtonClickClearFilter: function (button, e, options) {
        console.log('onButtonClickClearFilter!');
        button.up('staticdatagrid').filters.clearFilters();
    },
    onStoreSync: function(store, operation, options){
        console.log('onStoreSync!');
        Packt.util.Util.showToast('Success! Your changes have been  saved.');
    }
});
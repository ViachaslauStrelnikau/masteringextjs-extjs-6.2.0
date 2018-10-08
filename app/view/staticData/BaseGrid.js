Ext.define('Packt.view.staticData.BaseGrid', {
    // extend: 'Ext.ux.LiveSearchGridPanel', //#1
    extend: 'Ext.grid.Panel', //#1
    xtype: 'staticdatagrid',
    requires: [
        'Ext.button.Button',
        'Ext.grid.column.Date',
        'Ext.grid.column.Widget',
        'Ext.grid.filters.Filters',
        'Ext.grid.plugin.CellEditing',
        'Ext.toolbar.Separator',
        'Packt.util.Glyphs'
        //#2
    ],
    columnLines: true,    //#3
    viewConfig: {
        stripeRows: true //#4
    },
    //more code here
    initComponent: function () {
        var me = this;
        me.selModel = {
            selType: 'cellmodel' //#5
        };
        me.plugins = [
            {
                ptype: 'cellediting',  //#6
                clicksToEdit: 2,
                pluginId: 'cellplugin'
            },
            {
                ptype: 'gridfilters'  //#7
            }
        ];
        //docked items
        me.dockedItems = [
            {
                xtype: 'toolbar',
                dock: 'top',
                itemId: 'topToolbar', //#9
                items: [
                    {
                        xtype: 'button',
                        itemId: 'add', //#10
                        text: 'Add',
                        glyph: Packt.util.Glyphs.getGlyph('add')
                    },
                    {
                        xtype: 'tbseparator'
                    },
                    {
                        xtype: 'button',
                        itemId: 'save',
                        text: 'Save Changes',
                        glyph: Packt.util.Glyphs.getGlyph('saveAll')
                    },
                    {
                        xtype: 'button',
                        itemId: 'cancel',
                        text: 'Cancel Changes',
                        glyph: Packt.util.Glyphs.getGlyph('cancel')
                    },
                    {
                        xtype: 'tbseparator'
                    }
                    // ,
                    // {
                    //     xtype: 'button',
                    //     itemId: 'clearFilter',
                    //     text: 'Clear Filters',
                    //     glyph: Packt.util.Glyphs.getGlyph('clearFilter')
                    // }
                ]
            }
        ];
        //columns
        me.columns = Ext.Array.merge( //#11
            me.columns,               //#12
            [{
                xtype: 'datecolumn',
                text: 'Last Update',
                width: 150,
                dataIndex: 'last_update',
                format: 'Y-m-j H:i:s',
                filter: true
            },
                {
                    xtype: 'widgetcolumn', //#13
                    width: 45,
                    sortable: false,       //#14
                    menuDisabled: true,    //#15
                    itemId: 'delete',
                    // editor: null,
                    widget: {

                        xtype: 'button',
                        glyph: Packt.util.Glyphs.getGlyph('destroy'),
                        tooltip: 'Delete',
                        scope: me,

                        handler: function (btn) {  //#18
                            var record = btn.getWidgetRecord();
                            var fieldName = record.store.model.prototype.fields[2].getName();
                            var messageVal='Are you sure want to delete record: <p>' +  record.get(fieldName) + ' ?'
                            Ext.Msg.confirm({
                                title: 'Warning',
                                iconCls: 'fa fa-trash',
                                height: 200,
                                width: 400,
                                msg: messageVal,
                                fn: del,
                                buttons: Ext.Msg.YESNO,
                                scope: me
                            });
                            function del (choice) {
                                if (choice === 'yes'){
                                    Ext.GlobalEvents.fireEvent('widgetclickdelete',me, btn);
                                    // var store = me.getStore();
                                    // rec = btn.getWidgetRecord();
                                    // store.remove(rec);
                                }
                            }
                        }
                    }
                }
                ]
        );
        me.validateRow = function(record, rowIndex){
            var me = this,
                view = me.getView(),
                errors = record.validate(); //#1
            if (errors.isValid()) {         //#2
                return true;
            }
            var columnIndexes = me.getColumnIndexes(); //#3
            Ext.each(columnIndexes, function (columnIndex, col) { //#4
                var cellErrors, cell, messages;
                cellErrors = errors.getByField(columnIndex);      //#5
                if (!Ext.isEmpty(cellErrors)) {
                    cell = view.getCellByPosition({
                        row: rowIndex, column: col
                    });
                    messages = [];
                    Ext.each(cellErrors, function (cellError) { //#6
                        messages.push(cellError.message);
                    });
                    cell.addCls('x-form-error-msg x-form-invalid-icon x-form-invalid-icon-default'); //#7

                    cell.set({ //#8
                        'data-errorqtip': Ext.String.format('<ul><li class="last">{0}</li></ul>',
                    messages.join('<br/>'))
                });
                }
            });
            return false;
        };
        me.getColumnIndexes = function() {
            var me = this,
                columnIndexes = [];
            Ext.Array.each(me.columns, function (column) { //#9
                if (Ext.isDefined(column.getEditor())) {   //#10
                    columnIndexes.push(column.dataIndex);  //#11
                } else {
                    columnIndexes.push(undefined);
                }
            });
            return columnIndexes; //#12
        };
        me.validate = function(){
            var me = this,
                isValid = true,
                view = me.getView(),
                error,
                record;
            Ext.each(view.getNodes(), function (row, col) { //#13
                record = view.getRecord(row);
                isValid = (me.validateRow(record, col) && isValid); //#14
            });
            error = isValid ? undefined : { //#15
                title: "Invalid Records",
                message: "Please fix errors before saving."
            };
            return error; //#16
        };
        me.callParent(arguments); //#8
    }
});
/**
 * Created by Odmin on 27.09.2018.
 */
Ext.define('Packt.view.base.Grid', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Ext.button.Button',
        'Ext.grid.column.Date',
        'Ext.grid.column.Widget',
        'Packt.util.Glyphs'
    ],

    columnLines: true,
    viewConfig: {
        stripeRows: true
    },
    initComponent: function() {
        var me = this;
        me.columns = Ext.Array.merge(
            me.columns,
            [{
                xtype    : 'datecolumn',
                text     : 'Last Update',
                width    : 150,
                dataIndex: 'last_update',
                format: 'Y-m-j H:i:s',
                filter: true
            },{
                xtype: 'widgetcolumn',
                width: 50,
                sortable: false,
                menuDisabled: true,
                widget: {
                    xtype: 'button',
                    glyph: Packt.util.Glyphs.getGlyph('edit'),
                    tooltip: 'Edit',
                    handler: 'onEdit'   //#1
                }
            },{
                xtype: 'widgetcolumn',
                width: 50,
                sortable: false,
                menuDisabled: true,
                widget: {
                    xtype: 'button',
                    glyph: Packt.util.Glyphs.getGlyph('destroy'),
                    tooltip: 'Delete',
                    handler: 'onDelete'  //#2
                }
            }]
        );
        me.callParent(arguments);
    }
});
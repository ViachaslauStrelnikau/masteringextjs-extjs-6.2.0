/**
 * Created by Odmin on 23.08.2018.
 */
Ext.define('Packt.model.menu.TreeNode', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int'},
        { name: 'text' },
        { name: 'iconCls' },
        { name: 'className' },
        { name: 'parent_id', mapping: 'menu_id'} //#1
    ]

});
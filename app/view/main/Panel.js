/**
 * Created by Odmin on 20.08.2018.
 */
Ext.define('Packt.view.main.Panel', {
    extend: 'Ext.tab.Panel',
    xtype:'mainpanel',

    requires: [
        'Ext.panel.Panel'
    ],

    activeTab:0,

    items: [
        {
            xtype:'panel',
            closable:false,
            iconClas:'fa fa-home fa-lg tabIcon',
            title:'Home'
        }
    ]
});
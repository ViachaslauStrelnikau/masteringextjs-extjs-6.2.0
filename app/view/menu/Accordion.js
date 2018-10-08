 /**
 * Created by Odmin on 24.08.2018.
 */
Ext.define('Packt.view.menu.Accordion', {
    extend: 'Ext.Panel',
    xtype:'mainmenu',

    requires: [
        'Ext.layout.container.Accordion'
    ],

    width:250,
    layout:{
        type:'accordion',
        multi:true
    },
    collapsible:true,
    split:true,
    iconCls: 'fa fa-sitemap fa-lg', // #5
    title: translations.menu

});
/**
 * Created by Odmin on 20.08.2018.
 */
Ext.define('Packt.view.main.Footer', {
    extend: 'Ext.Container',
    xtype:'appfooter',

    requires: [
        'Ext.layout.container.Center'
    ],

    cls:'app-footer',
    height:30,
    layout:'center',
    /*
    Uncomment to give this component an xtype
    xtype: 'footer',
    */

    items: [
        {
            xtype: 'component',               //#6
            width: 350,                       //#7
            componentCls: 'app-footer-title', //#8
            bind: {
                html: '{footer}'              //#9
            }
        }
    ]
});
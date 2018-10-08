/**
 * Created by Odmin on 23.08.2018.
 */
Ext.define('Packt.store.Menu', {
    extend: 'Ext.data.Store',

    requires: [
        'Packt.model.menu.Accordion',
        'Packt.util.Util'
    ],

    model: 'Packt.model.menu.Accordion', //#2
    proxy: {
        type: 'ajax',             //#3
        url: 'php/menu/list.php', //#4
        reader: { //#5
            type: 'json',
            rootProperty: 'data'
        },
        listeners: {
            exception: function(proxy, response, operation){ //#6
                Packt.util.Util.showErrorMsg(response.responseText);
            },
            load:function (store, records, success, operation) {
                console.log(this)
            }
            
        }
    }
});
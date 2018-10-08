/**
 * Created by Odmin on 21.09.2018.
 */
Ext.define('Packt.model.staticData.Base', {
    extend: 'Packt.model.Base',

    requires: [],

    fields: [
        {
            name: 'last_update',
            type: 'date',
            dateFormat: 'Y-m-j H:i:s'
        }
        ],
    validators: {
        // last_update:[ {type:'presence',message: 'This field is mandatory'}]
    }
});


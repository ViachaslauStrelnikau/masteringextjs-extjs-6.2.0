/**
 * Created by Odmin on 05.10.2018.
 */
Ext.define('Packt.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        /*
        Uncomment to add references to view components
        refs: [{
            ref: 'list',
            selector: 'grid'
        }],
        */

        /*
        Uncomment to listen for events from view components
        control: {
            'useredit button[action=save]': {
                click: 'updateUser'
            }
        }
        */
    },

    /**
     * Called when the view is created
     */
    init: function() {
        Packt.app.createController('Root');
    }
});
/**
 * Created by Odmin on 30.08.2018.
 */
Ext.define('Packt.view.security.UserModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.user',

    requires: [
        'Packt.model.security.Group',
        'Packt.model.security.User'
    ],

    stores: { //#1
        users: { //#2
            model: 'Packt.model.security.User',
            session: true,
            autoLoad: true
        },
        groups: {
            model: 'Packt.model.security.Group',
            session: true,
            autoLoad: true
        }
    }
});
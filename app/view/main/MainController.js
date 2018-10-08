/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Packt.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires: [
        'Packt.util.Util'
    ],

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    onLogout: function(button, e, options){
        var me = this;      //#1
        me.getView().mask('Logging out... Please wait...');
        Ext.Ajax.request({
            url: 'php/security/logout.php', //#2
            scope: me,                      //#3
            success: 'onLogoutSuccess',     //#4
            failure: 'onLogoutFailure'      //#5
        });
    },
    onLogoutSuccess:function (conn, response, options, eOpts) {
        //#1

        var result = Packt.util.Util.decodeJSON(conn.responseText);
        if (result.success) { //#2
            this.getView().unmask();
            this.getView().destroy(); //#3
            window.location.reload(); //#4
        } else {
            Packt.util.Util.showErrorMsg(result.msg); //#5
            this.getView().unmask();
        }
    },
    onLogoutFailure:function(conn, response, options, eOpts){
        Packt.util.Util.showErrorMsg(conn.responseText);
        this.getView().unmask();
    }
});

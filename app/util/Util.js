/**
 * Created by Odmin on 08.08.2018.
 */
Ext.define('Packt.util.Util', {

    requires: [
        'Ext.form.action.Action',
        'Ext.window.Toast'
    ],

    statics : { //#1
        decodeJSON : function (text, suppress) { //#2
            if(!suppress)
                suppress=true;

            var result = Ext.JSON.decode(text, suppress);
            if (!result){
                result = {};
                result.success = false;
                result.msg = text;
            }
            return result;
        },
        showErrorMsg: function (text) { //#3
            Ext.Msg.show({
                title:'Error!',
                msg: text, //#8
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        },
        isLetter:function (text) {
            return(text.toLowerCase()!=text.toUpperCase());
        },
        showToast: function(text) {
            var w = Ext.create('Ext.window.Toast', {
                html: text,
                closable: false,
                align: 't',
                slideInDuration: 400,
                minWidth: 400
            });
            w.show();
        },
        handleFormFailure:function (action) {
            var me = this,
                result =
                    Packt.util.Util.decodeJSON(action.response.responseText);
            switch (action.failureType) {
                case Ext.form.action.Action.CLIENT_INVALID:
                    me.showErrorMsg('Form fields may not be submitted with invalid values'); //#1
                    break;
                case Ext.form.action.Action.CONNECT_FAILURE:
                    me.showErrorMsg(action.response.responseText);
                    break;
                case Ext.form.action.Action.SERVER_INVALID:
                    me.showErrorMsg(result.msg);
            }
        },
        required: '<span style="color:red;font-weight:bold" data-qtip="Required"> *</span>'
    }
});
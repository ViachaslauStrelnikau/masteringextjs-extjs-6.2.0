/**
 * Created by Odmin on 30.08.2018.
 */
Ext.define('Packt.view.security.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user',
    requires: [
        'Packt.model.security.User',
        'Packt.util.Util',
        'Packt.view.security.UserForm'
    ],
    onAdd: function(button, e, options){
        this.createDialog(null);
    },
    onEdit: function(button, e, options){

        var me = this;
        records = me.getRecordsSelected(); //#1
        if(records[0]){ //#2
            console.log('record selected');
            console.log(records[0]);
            me.createDialog(records[0]); //#3
        }
    },

    createDialog: function(record){
        var me = this;
        view = me.getView(); //#1
      //  console.log(record);
        me.dialog = view.add({
            xtype: 'user-form',  //#2
            viewModel: {         //#3
                data: {
                    title: record ? 'Edit: ' +  record.get('name') : 'Add User', //#4
                    currentUser: record || new Packt.model.security.User
                }
                // ,
                // links: { //#5
                //     currentUser: record ||
                //     { //#6
                //         type: 'User',        //#7
                //         create: true
                //     }
                // }
            }
        });
        me.dialog.show(); //#7
    },

    getRecordsSelected: function(){
        var me = this;
        var grid = me.lookupReference('usersGrid'); //#4
        return grid.getSelection(); //#5
    },
    onDelete: function(button, e, options){
        var me = this,
            view = me.getView(),
            records = me.getRecordsSelected(), //#1
            store = me.getStore('users');      //#2
        if (store.getCount() >= 2 && records.length){ //#3
            Ext.Msg.show({
                title:'Delete?', //#4
                msg: 'Are you sure you want to delete?',
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.QUESTION,
                fn: function (buttonId){
                    if (buttonId == 'yes'){ //#5
                        store.remove(records); //#6
                        store.sync();          //#7
                    }
                }
            });
        } else if (store.getCount() === 1) { //#8
            Ext.Msg.show({
                title:'Warning',
                msg: 'You cannot delete all the users from the application.',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.WARNING
        });
        }

    },

    onSave: function(button, e, options){
        var me = this;
        form = me.lookupReference('form');
        if (form&&form.isValid())
        {
            me.getView().mask(translations.modalSaving);

            form.submit({     //#3
                clientValidation: true, //#4
                url: 'php/user/save.php', //#5
                scope: me,                //#6
                success: 'onSaveSuccess',
                failure: 'onSaveFailure'
            });
        }
    },

    onSaveSuccess: function(form, action) {
        var me = this;
        me.onCancel();
        me.refresh();
        Packt.util.Util.showToast('Success! User saved.'); //#9

    },
    onSaveFailure: function(form, action) {
        Packt.util.Util.handleFormFailure(action)
    },

    onCancel: function(button, e, options){
        var me =this;
        me.getView().unmask();
        me.dialog=Ext.destroy(me.dialog)
    },

    refresh: function(button, e, options){
        var me = this,
            store = me.getStore('users');
        store.load();
    },
    onFileFieldChange: function(fileField, value, options) {
        var me = this,
            file = fileField.fileInputEl.dom.files[0], //#1
            picture = this.lookupReference('userPicture'); //#2
        if (typeof FileReader !== 'undefined' && (/image/i).test(file.type)) { //#3
            var reader = new FileReader();       //#4
            reader.onload = function(e){         //#5
                picture.setSrc(e.target.result); //#6
            };
            reader.readAsDataURL(file);          //#7
        } else if (!(/image/i).test(file.type)){ //#8
            Ext.Msg.alert(translations.userPicUploadWarningTitle, translations.userPicUploadWarningBody);
            fileField.reset();                   //#9
        }

    }
});
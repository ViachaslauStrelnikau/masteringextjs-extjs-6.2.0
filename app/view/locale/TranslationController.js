/**
 * Created by Odmin on 22.08.2018.
 */
Ext.define('Packt.view.locale.TranslationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.translation',

    /**
     * Called when the view is created
     */
    onMenuItemClick:function(item, e, options){
        var menu = this.getView();
        menu.setIconCls(item.iconCls);
        menu.setText(item.text);
 //       console.log(item.iconCls);
        localStorage.setItem("user-lang", item.iconCls);
        window.location.reload();
    },

    init: function() {
        var lang = localStorage ? (localStorage.getItem('user-lang') ||
            'ru') : 'ru',
            button = this.getView();
        button.setIconCls(lang); //#1
        if (lang == 'en'){       //#2
            button.setText('English');
        } else if (lang == 'ru'){
            button.setText('Русский');
        }
    }
});
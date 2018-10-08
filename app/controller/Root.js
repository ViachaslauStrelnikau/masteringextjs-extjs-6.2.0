/**
 * Created by Odmin on 05.10.2018.
 */
Ext.define('Packt.controller.Root', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.util.History',
        'Packt.util.Util'
    ],

    init: function () {
        this.addRef([
            {
                ref: 'mainPanel',
                selector: 'mainpanel'
            },
            {
                ref: 'filmsGrid',
                selector: '[xtype=films-grid]'
            }
        ]);
        this.callParent();
    },

    routes: {
        'home': 'onHome',
        'user|actorsgrid|categoriesgrid|languagesgrid|citiesgrid|countriesgrid|films|salesfilmcategory': {
            before: 'onBeforeRoute',
            action: 'onRoute'
        },
        'films/:id': {
            action: 'onFilmSelect',
            before: 'onBeforeFilmSelect',
            conditions: {
                ':id': '([0-9]+)'
            }
        }
    },

    onHome: function () {
        var mainPanel = this.getMainPanel(); //#1
        if (mainPanel) {
            mainPanel.setActiveTab(0);
        }
    },

    onBeforeRoute: function (action) {
        var hash = Ext.util.History.getToken(); //#1
        Ext.Ajax.request({
            url: 'php/security/verifyEntitlement.php',
            params: {
                module: hash
            },
            success: function (conn, response, options, eOpts) {
                var result =
                    Packt.util.Util.decodeJSON(conn.responseText);
                if (result.success) {
                    action.resume();   //#2
                } else {
                    Packt.util.Util.showErrorMsg(result.msg);
                    action.stop();     //#3
                }
            },
            failure: function (conn, response, options, eOpts) {
                Packt.util.Util.showErrorMsg(conn.responseText);
                action.stop();         //#4
            }
        });
    },

    onRoute: function () {
        var me = this;
        hash = Ext.util.History.getToken();
        main = me.getMain(); //#5
        me.locateMenuItem(main, hash); //#6
    },

    locateMenuItem: function (mainMenu, hash) {
        var me = this,
            root, node;
        Ext.each(mainMenu.items.items, function (tree) {
            if (tree.getXType() === 'menutree') {
                root = tree.getRootNode();
                node = root.findChild('className', hash);
                if (node) {
                    me.openTab(node); //#1
                    return;
                }
            }
        });
    },
    openTab: function (record) {
        var mainPanel = this.getMainPanel();
        var newTab = mainPanel.items.findBy(
            function (tab) {
                return tab.title === record.get('text');
            });
        if (!newTab) {
            newTab = mainPanel.add({
                xtype: record.get('className'),
                glyph: record.get('glyph') + '@FontAwesome',
                title: record.get('text'),
                closable: true
            });
        }
        mainPanel.setActiveTab(newTab);
    },
    listen: {
        controller: {
            '*': {
                unmatchedroute: 'onUnmatchedRoute'
            }
        }
    },
    onBeforeFilmSelect: function (id, action) {
        var me = this,
            main = me.getMain();
        this.locateMenuItem(this.getMain(), 'films'); //#1
        var record =
            this.getFilmsGrid().getStore().findRecord('film_id', id);
        if (record) {
            action.resume();
        }
        else {
            action.stop();
        }
    },
    onFilmSelect: function(id){
        this.getFilmsGrid().fireEvent('selectfilm', id);
    }
});
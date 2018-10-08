/**
 * Created by Odmin on 30.08.2018.
 */
Ext.define('Packt.util.Glyphs', {
    singleton: true, //#1
    config: { //#2
        webFont: 'FontAwesome',
        add: 'xf067',
        edit: 'xf040',
        destroy: 'xf1f8',
        save: 'xf00c',
        cancel: 'xf0e2',
        saveAll: 'xf0c7',
        clearFilter: 'xf0b0',
        print: 'xf02f',
        pdf: 'xf1c1',
        excel: 'xf1c3'
    },
    constructor: function(config) { //#3
        this.initConfig(config);
    },
    getGlyph : function(glyph) { //#4
        var me = this,
            font = me.getWebFont(); //#5
        if (typeof me.config[glyph] === 'undefined') {
            return false;
        }
        return me.config[glyph] + '@' + font;
    }
});
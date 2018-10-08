/**
 * Created by Odmin on 05.10.2018.
 */
Ext.define('Packt.view.reports.SalesFilmCategory', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.salesfilmcategory',
    // xtype:'salesfilmcategory',
    requires: [
        'Ext.layout.container.Card',
        'Packt.view.reports.SalesFilmCategoryBar',
        'Packt.view.reports.SalesFilmCategoryColumn',
        'Packt.view.reports.SalesFilmCategoryController',
        'Packt.view.reports.SalesFilmCategoryModel',
        'Packt.view.reports.SalesFilmCategoryPie'
    ],
    controller: 'sales-film-category', //#1
    viewModel: {
        type: 'sales-film-category'   //#2
    },
    layout: 'card',
    activeItem: 0,
    items: [{
        xtype: 'salesfilmcategorypie' //#3
    }
    , {
        xtype: 'salesfilmcategorycol' //#4
    },{
        xtype: 'salesfilmcategorybar' //#5
    }
    ],
    dockedItems: [{
        xtype: 'toolbar',
        flex: 1,
        dock: 'top',
        items: [
            //items of toolbar here #6
            {
                text: 'Change Chart Type',
                glyph: Packt.util.Glyphs.getGlyph('menuReports'),
                menu: {
                    xtype: 'menu',
                    defaults: {
                        listeners: {
                            click: 'onChangeChart' //#7
                        }
                    },
                    items: [
                        {
                            xtype: 'menuitem',
                            text: 'Pie',
                            itemId: 'pie',  //#8
                            glyph: Packt.util.Glyphs.getGlyph('chartPie')
                        },
                        {
                            xtype: 'menuitem',
                            text: 'Column',
                            itemId: 'column',  //#9
                            glyph: Packt.util.Glyphs.getGlyph('chartBar')
                        },
                        {
                            xtype: 'menuitem',
                            text: 'Bar',
                            itemId: 'bar',  //#10
                            glyph: Packt.util.Glyphs.getGlyph('chartColumn')
                        }
                    ]
                }
            },
            {
                text: 'Download Chart',
                glyph: Packt.util.Glyphs.getGlyph('download'),
                menu: {
                    xtype: 'menu',
                    defaults: {
                        listeners: {
                            click: 'onChartDownload' //#11
                        }
                    },
                    items: [
                        {
                            xtype: 'menuitem',
                            text: 'Download as Image',
                            itemId: 'png',
                            glyph: Packt.util.Glyphs.getGlyph('image')
                        },
                        {
                            xtype: 'menuitem',
                            text: 'Download as PDF',
                            itemId: 'pdf',
                            glyph: Packt.util.Glyphs.getGlyph('pdf')
                        }
                    ]
                }
            }
    ]
    }]
});
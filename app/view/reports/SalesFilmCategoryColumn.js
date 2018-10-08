/**
 * Created by Odmin on 05.10.2018.
 */
Ext.define('Packt.view.reports.SalesFilmCategoryColumn', {
    extend: 'Ext.chart.CartesianChart',  //#1
    alias: 'widget.salesfilmcategorycol',

    requires: [
        'Ext.chart.axis.Category3D',
        'Ext.chart.axis.Numeric',
        'Ext.chart.interactions.ItemHighlight',
        'Ext.chart.series.Bar3D',
        'Ext.util.Format'
    ],

    bind: '{salesFilmCategory}', //#2
    insetPadding: {
        top: 40,
        bottom: 40,
        left: 20,
        right: 40
    },
    interactions: 'itemhighlight', //#3
    //axes
    axes: [{
        type: 'numeric',   //#4
        position: 'left',
        fields: ['total_sales'],
        label: {
            renderer: Ext.util.Format.numberRenderer('0,0')
        },
        titleMargin: 20,
        title: {
            text: 'Total Sales',
            fontSize: 14
        },
        grid: true,
        minimum: 0
    }, {
        type: 'category3d', //#5
        position: 'bottom',
        fields: ['category'],
        titleMargin: 20,
        title: {
            text: 'Film Category',
            fontSize: 14
        }
    }],
    //series
    series: [{
        type: 'bar3d', //#6
        highlight: true,
        style: {
            minGapWidth: 20
        },
        label: {
            display: 'insideEnd',
            'text-anchor': 'middle',
            field: 'total_sales',     //#7
            renderer: Ext.util.Format.numberRenderer('0'),
            orientation: 'vertical',
            color: '#333'
        },


        xField: 'category',   //#8
        yField: 'total_sales' //#9
    }]
});
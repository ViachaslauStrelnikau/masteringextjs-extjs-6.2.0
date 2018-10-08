/**
 * Created by Odmin on 05.10.2018.
 */
Ext.define('Packt.view.reports.SalesFilmCategoryPie', {
    extend: 'Ext.chart.PolarChart',      //#1
    alias: 'widget.salesfilmcategorypie',

    requires: [
        'Ext.chart.interactions.ItemHighlight',
        'Ext.chart.interactions.Rotate',
        'Ext.chart.series.Pie'
    ],

    legend: {
        docked: 'left'   //#2
    },
    interactions: ['rotate', 'itemhighlight'], //#3
    bind: '{salesFilmCategory}', //#4

    insetPadding: 40,
    innerPadding: 20,

    series: {
        type: 'pie',       //#5
        highlight: true,
        donut: 30,//#6
        angleField:'total_sales',

        distortion: 0.6,
        style: {           //#7
            strokeStyle: 'white',
            opacity: 0.90
        },

        label: {
            field: 'category',   //#8
             display: 'rotate'
        },
        tooltip: {               //#9
            trackMouse: true,
            renderer: function (storeItem, item) {
                this._tooltip.setHtml(item.get('category') + ': '+ item.get('total_sales'));
            }
        },
         xField: 'total_sales'  //#10
    }
});
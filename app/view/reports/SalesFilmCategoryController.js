/**
 * Created by Odmin on 05.10.2018.
 */
Ext.define('Packt.view.reports.SalesFilmCategoryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sales-film-category',
    //methods here

    onChangeChart: function(item, e, options) {
        var panel = this.getView(); // #1
        if (item.itemId == 'pie'){
            panel.getLayout().setActiveItem(0); // #2
        } else if (item.itemId == 'column'){
            panel.getLayout().setActiveItem(1); // #3
        } else if (item.itemId == 'bar'){
            panel.getLayout().setActiveItem(2); // #4
        }
    },
    onChartDownload: function(item, e, options) {
        var panel = this.getView();
        var chart = panel.getLayout().getActiveItem(); //#1
        if (item.itemId == 'png'){
            Ext.MessageBox.confirm('Confirm Download',
                'Would you like to download the chart as Image?',
                function(choice){
                    if(choice == 'yes'){
                        chart.download({   //#2
                            format: 'png',
                            filename: 'SalesXFilmCategory'
                        });
                    }
                });
        } else if (item.itemId == 'pdf'){
            Ext.MessageBox.confirm('Confirm Download',
                'Would you like to download the chart as PDF?',
                function(choice){
                    if(choice == 'yes'){
                        chart.download({  //#3
                            format: 'pdf',
                            filename: 'SalesXFilmCategory',
                            pdf: {
                                format: 'A4',
                                orientation: 'landscape',
                                border: '1cm'
                            }
                        });
                    }
                });
        }
    }
});
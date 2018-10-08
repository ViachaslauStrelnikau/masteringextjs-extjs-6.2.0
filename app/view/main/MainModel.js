/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Packt.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Packt',

        appHeaderIcon: '<span class="fa fa-desktop fa-lg app-header-logo">',
        footer: 'Test app',
        appName:'DVD Rental Store'
    }

    //TODO - add data, formulas and/or methods to support your view
});

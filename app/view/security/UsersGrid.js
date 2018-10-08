/**
 * Created by Odmin on 29.08.2018.
 */
Ext.define('Packt.view.security.UsersGrid', {
    extend: 'Ext.grid.Panel',

    alias: 'widget.users-grid',  //#1
    bind : '{users}',
    reference: 'usersGrid', //#2
    multiSelect: true,

    columns: [  //#3
        {
            width: 150,
            dataIndex: 'userName',  //#4
            text: 'Username'
        },
        {
            width: 200,
            dataIndex: 'name',
            flex: 1,             //#5
            text: 'Name'
        },
        {
            width: 250,
            dataIndex: 'email',
            text: 'Email'
        },
        {
            width: 150,
            dataIndex: 'groupName', //#6
            text: 'Group'
        }
    ]
});
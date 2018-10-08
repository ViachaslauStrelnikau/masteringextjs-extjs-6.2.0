/**
 * Created by Odmin on 29.08.2018.
 */
Ext.define('Packt.model.security.User', {
    extend: 'Packt.model.security.Base',

    requires: [
        'Ext.data.validator.Email',
        'Ext.data.validator.Exclusion',
        'Ext.data.validator.Format',
        'Ext.data.validator.Length',
        'Ext.data.validator.Presence'
    ],
    entityName: 'User',
    fields: [
        {name:'name'},
        {name:'userName'},
        {name:'email'},
        {name:'picture'},
        {name:'groups_id',type:'int'},
        { name:'groupName', type:'string', persist:false,
            convert:function(v, rec){
                var data = rec.data;
                if (data.group && data.group.name){
                    return data.group.name;
                }
                return data.groups_id;
            }
        }
    ],
    validators: {
        name: [
            { type: 'presence', message: translations.modelNameValidationPresence},
            { type: 'length', min: 3, max: 100, bothMessage :translations.modelNameValidationLenght}
        ],
        userName: [
            { type: 'exclusion', list: ['Admin', 'Operator'],message:translations.modelUserNameValidationExclusion },
            { type: 'format', matcher: /(^[a-z]+)/,message:translations.modelUserNameValidationFormat},
            { type: 'presence', message: translations.modelUserNameValidationPresence},
            { type: 'length', min: 3, max: 25,bothMessage :translations.modelUserNameValidationLenght}
        ],
        email: [
            { type: 'presence', message: translations.modelEmailValidationPresence},
            { type: 'length', min: 5, max: 100,bothMessage :translations.modelEmailValidationLenght},
            { type: 'email' ,message:translations.modelEmailValidation}
        ],
        groups_id: [
            { type: 'presence', message: translations.modelEmailValidationGroups_id}
        ]
    },
    hasOne: [
        {
            model: 'Group',         //#1
            name: 'group',          //#2
            foreignKey:'groups_id', //#3
            associationKey: 'group'
        }
    ]
});
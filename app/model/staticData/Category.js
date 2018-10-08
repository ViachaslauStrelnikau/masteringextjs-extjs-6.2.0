/**
 * Created by Odmin on 21.09.2018.
 */
Ext.define('Packt.model.staticData.Category', {
    extend: 'Packt.model.staticData.Base',

    entityName: 'Category',
    idProperty: 'category_id',
    fields: [
        {
            name: 'category_id',
        },
        {
            name:'name',
            defaultValue: 'New Category*'
        }
    ],
    manyToMany: {
        CategoryFilms: {
            type: 'Film',
            role: 'films',
            field: 'film_id',
            right: {
                field: 'category_id',
                role: 'categories'
            }
        }
    }

});
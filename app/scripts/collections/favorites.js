define(['backbone', 'FavoriteModel', 'localstorage'], function (Backbone, FavoriteModel) {
    'use strict';

    return Backbone.Collection.extend({
        model: FavoriteModel,
        localStorage: new Backbone.LocalStorage('FavoritesCollection'),

        createMissing: function (collection) {
            collection.forEach(function (carModel) {
                if (!this.get(carModel.id)) {
                    this.add({id: carModel.id});
                }
            }, this);

        }


    });

});

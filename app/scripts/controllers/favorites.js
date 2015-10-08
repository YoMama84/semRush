define(['backbone', 'FavoritesView', 'CounterView'], function (Backbone, FavoritesView, CounterView) {
    'use strict';
    return {
        init: function (carsCollection, favoritesCollection) {

            this.favoritesCollection = favoritesCollection;

            new FavoritesView({
                collection: carsCollection,
                favoritesCollection: favoritesCollection
            });

            new CounterView({
                collection: favoritesCollection
            });

        }
    };


});

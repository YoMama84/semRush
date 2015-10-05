define([
    'backbone',
    'CarsCollection',
    'CarsCollectionView',
    'FilterView',
    'PhotoView',
    'FavoritesCollection'
], function (Backbone,
             CarsCollection,
             CarsCollectionView,
             FilterView,
             PhotoView) {
    'use strict';

    return {
        init: function (carsCollection, favoritesCollection) {


            new FilterView({
                collection: carsCollection
            });

            var carsView = new CarsCollectionView({
                collection: carsCollection,
                favoritesCollection: favoritesCollection
            });

            var photoView = new PhotoView();

            Backbone.on('filter:change', carsView.showCarsByBrand, carsView);

            //Отлавливаем наведение мыши на фото
            Backbone.on('photo:mouseenter', photoView.show, photoView);
            Backbone.on('photo:mouseleave', photoView.hide, photoView);

        }


    };

});

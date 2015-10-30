define([
    'backbone',
    'CarsCollectionView',
    'FilterView',
    'PhotoView',
    'CarView'
], function (Backbone,
             CarsCollectionView,
             FilterView,
             PhotoView,
             CarView
) {
    'use strict';

    return {
        init: function (carsCollection, favoritesCollection) {

            this.carsCollection = carsCollection;
            this.favoritesCollection = favoritesCollection;

            new FilterView({
                collection: carsCollection
            });

            this.carsView = new CarsCollectionView({
                collection: carsCollection,
                favoritesCollection: favoritesCollection,
                ChildView: CarView
            });

            var photoView = new PhotoView();

            Backbone.on('filter:change', this.carsView.showCarsByBrand, this.carsView);

            //Отлавливаем наведение мыши на фото
            Backbone.on('photo:mouseenter', photoView.show, photoView);
            Backbone.on('photo:mouseleave', photoView.hide, photoView);

            Backbone.on('cars:makeFavorite', this.addToFavorite, this);

        },

        //Создаем новую модель для избранного и задаем её для вида
        addToFavorite: function(model){
            var favoriteModel = this.favoritesCollection.add({
                id: model.id
            });

            this.carsView.setViewFavoriteModel(favoriteModel);

        }


    };

});

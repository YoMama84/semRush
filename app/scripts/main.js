/*global require*/
'use strict';

require.config({

    shim: {},
    paths: {

        //libs
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        localstorage: '../bower_components/Backbone.localStorage/backbone.localStorage',
        async: '../bower_components/requirejs-plugins/src/async',
        goog: '../bower_components/requirejs-plugins/src/goog',
        propertyParser: '../bower_components/requirejs-plugins/src/propertyParser',
        JST: 'templates',

        //views
        TabsView: 'views/tabs',
        StatisticsView: 'views/statistics',
        CarView: 'views/car',
        CarsCollectionView: 'views/cars',
        FilterView: 'views/filter',
        PhotoView: 'views/photo',
        FavoriteView: 'views/favorite',
        FavoritesView: 'views/favorites',
        CounterView: 'views/counter',
        ItemView: 'views/item',

        //collections
        CarsCollection: 'collections/cars',
        StatisticsCollection: 'collections/statistics',
        FavoritesCollection: 'collections/favorites',

        //models
        StatisticsModel: 'models/statistics',
        FavoriteModel: 'models/favorite',
        CarModel: 'models/car',

        //controllers
        StatisticsController: 'controllers/statistics',
        TabsController: 'controllers/tabs',
        CarsController: 'controllers/cars',
        FavoritesController: 'controllers/favorites'

    }
});

require([
    'StatisticsController',
    'TabsController',
    'CarsController',
    'FavoritesController',
    'CarsCollection',
    'FavoritesCollection'

], function (StatisticsController,
             TabsController,
             CarsController,
             FavoritesController,
             CarsCollection,
             FavoritesCollection) {

    var carsCollection = new CarsCollection();
    var favoritesCollection = new FavoritesCollection();

    //Ждем загрузки коллекций
    $.when(carsCollection.fetch(), favoritesCollection.fetch()).done(function () {

        CarsController.init(carsCollection, favoritesCollection);
        FavoritesController.init(carsCollection, favoritesCollection);

    });


    TabsController.init();
    StatisticsController.init();

});

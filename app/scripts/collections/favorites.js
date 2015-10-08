define(['backbone', 'FavoriteModel', 'localstorage'], function (Backbone, FavoriteModel) {
    'use strict';

    return Backbone.Collection.extend({
        model: FavoriteModel,
        localStorage: new Backbone.LocalStorage('FavoritesCollection'),
        initialize: function(){
            this.on('destroy', function(model){
                this.remove(model);
            });

            this.on('add', function(model){
               model.save();
            });
        }
    });

});

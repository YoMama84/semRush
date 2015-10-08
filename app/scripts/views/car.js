define(['backbone', 'JST', 'ItemView'], function (Backbone, JST, ItemView) {
    'use strict';

    return ItemView.extend({

        template: JST['app/scripts/templates/auto.ejs'],

        events: {
            'click .table__button:not(.table__button--disable)': 'makeFavorite',
            'mouseenter .table__photo': function(event){
                Backbone.trigger('photo:mouseenter', event, this.model);
            },
            'mouseleave .table__photo': function(event){
                Backbone.trigger('photo:mouseleave', event, this.model);
            }
        },

        initialize: function (options) {
            this.favoriteModel = options.favoriteModel;
            this.listenTo(this.favoriteModel, 'destroy', this.unsetFavoriteModel);
            this.render();
        },

        makeFavorite: function(event){
            $(event.target).addClass('table__button--disable');
            Backbone.trigger('cars:makeFavorite', this.model);
        },

        setFavoriteModel: function(favoriteModel){
            this.favoriteModel = favoriteModel;
            this.listenTo(this.favoriteModel, 'destroy', this.unsetFavoriteModel);
            this.render();
        },

        unsetFavoriteModel: function(favoriteModel){
            this.favoriteModel = null;
            this.render();
        }

    });

});

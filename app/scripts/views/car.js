define(['backbone', 'JST', 'ItemView'], function (Backbone, JST, ItemView) {
    'use strict';

    return ItemView.extend({

        events: {
            'click .table__button:not(.table__button--disable)': 'addToFavorites',
            'mouseenter .table__photo': function(event){
                Backbone.trigger('photo:mouseenter', event, this.model);
            },
            'mouseleave .table__photo': function(event){
                Backbone.trigger('photo:mouseleave', event, this.model);
            }
        },

        initialize: function (options) {
            this.favoriteModel = options.favoriteModel;
            this.render();

            this.listenTo(this.favoriteModel, 'change', function(){
                this.render();
            });
        },

        addToFavorites: function(event){
            $(event.target).addClass('table__button--disable');
            this.favoriteModel.set('isFavorite', true);
            Backbone.trigger('cars:addToFavorites', this.model);
        }

    });

});

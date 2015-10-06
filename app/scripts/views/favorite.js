define(['ItemView'], function (ItemView) {
    'use strict';

    return ItemView.extend({
        template: JST['app/scripts/templates/favorite.ejs'],

        events: {
            'click .table__button:not(.table__button--disable)': 'removeFromFavorites',
            'mouseenter .table__photo': function(event){
                Backbone.trigger('photo:mouseenter', event, this.model);
            },
            'mouseleave .table__photo': function(event){
                Backbone.trigger('photo:mouseleave', event, this.model);
            }
        },

        removeFromFavorites: function(){
            this.favoriteModel.set('isFavorite', false);
            this.remove();
        }


    });

});

define(['backbone'], function (Backbone) {
    'use strict';

    return Backbone.View.extend({

        el: '#favoritesCounter',

        initialize: function () {
            this.listenTo(this.collection, 'change', this.render);
            this.render();
        },

        render: function () {
            this.$el.text(this.calculateFavorites());
        },

        calculateFavorites: function(){
            return this.collection.where({'isFavorite':true}).length;
        }

    });

});

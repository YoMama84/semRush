define(['backbone'], function (Backbone) {
    'use strict';

    return Backbone.View.extend({

        el: '#favoritesCounter',

        initialize: function () {
            this.listenTo(this.collection, 'add remove', this.render);
            this.render();
        },

        render: function () {
            this.$el.text(this.calculateFavorites());
        },

        calculateFavorites: function(){
            return this.collection.length;
        }

    });

});

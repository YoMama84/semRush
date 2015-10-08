define(['backbone', 'FavoriteView'], function (Backbone, FavoriteView) {
    'use strict';

    return Backbone.View.extend({

        el: '#favoritesTbody',

        initialize: function (options) {
            this.favoritesCollection = options.favoritesCollection;
            this.listenTo(this.favoritesCollection, 'add', this.renderItem);
            this.render();
        },


        render: function () {
            var $container = $(document.createDocumentFragment());

            this.favoritesCollection.forEach(function (favoriteModel) {
                var model = this.collection.get(favoriteModel.id);
                var view = this.createFavoriteView(model, favoriteModel);
                $container.append(view.el);
            }, this);

            this.$el.html($container);

        },

        //Добавляем запись в список избранных
        renderItem: function (favoriteModel) {
            var model = this.collection.get(favoriteModel.id);
            var view = this.createFavoriteView(model, favoriteModel);
            this.$el.append(view.el);
        },

        createFavoriteView: function (model, favoriteModel) {
            return new FavoriteView({
                model: model,
                favoriteModel: favoriteModel
            });
        }

    });

});

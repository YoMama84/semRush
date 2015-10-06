define(['backbone', 'FavoriteView'], function (Backbone, FavoriteView) {
    'use strict';

    return Backbone.View.extend({

        el: '#favoritesTbody',

        initialize: function (options) {
            this.favoritesCollection = options.favoritesCollection;
            this.listenTo(this.favoritesCollection, 'change:isFavorite', this.renderItem);
            this.render();
        },

        render: function(){
            var $container = $(document.createDocumentFragment());

            this.collection.forEach(function(model){
                var favoriteModel = this.favoritesCollection.get(model.id);

                if(this.isFavorite(favoriteModel)){
                    var view = new FavoriteView({
                        model: model,
                        favoriteModel: favoriteModel
                    });

                    $container.append(view.el);
                }

            },this);

            this.$el.html($container);

        },

        //Добавляем новую машину в список избранных
        renderItem: function (favoriteModel) {
            var model = this.collection.get(favoriteModel.id);

            if (this.isFavorite(favoriteModel)) {
                var view = new FavoriteView({
                    model: model,
                    favoriteModel: favoriteModel
                });

                this.$el.append(view.el);
            }

        },

        isFavorite: function(favoriteModel){
            return favoriteModel.get('isFavorite')
        }

    });

});

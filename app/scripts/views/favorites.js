define(['backbone', 'FavoriteView'], function (Backbone, FavoriteView) {
    'use strict';

    return Backbone.View.extend({

        el: '#favoritesTbody',

        initialize: function (options) {
            this.favoritesCollection = options.favoritesCollection;
            this.listenTo(this.favoritesCollection, 'change', this.render);
            this.render();
        },

        render: function(){
            var $container = $(document.createDocumentFragment());

            this.collection.forEach(function(model){
                var favoriteModel = this.favoritesCollection.get(model.id);

                if(favoriteModel.get('isFavorite')){
                    var view = new FavoriteView({
                        model: model,
                        favoriteModel: favoriteModel
                    });

                    $container.append(view.el);
                }

            },this);

            this.$el.html($container);

        }

    });

});

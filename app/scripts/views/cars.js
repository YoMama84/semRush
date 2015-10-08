define(['backbone', 'underscore', 'CarView'], function (Backbone, _, CarView) {
    'use strict';

    return Backbone.View.extend({

        el: '#carsTbody',

        initialize: function (options) {
            this.favoritesCollection = options.favoritesCollection;
            this.render();
        },

        render: function () {
            this.views = [];
            var $container = $(document.createDocumentFragment());

            this.collection.forEach(function (model) {
                var view = new CarView({
                    model: model,
                    favoriteModel: this.favoritesCollection.get(model.id)
                });

                this.views.push(view);
                $container.append(view.el);

            }, this);

            this.$el.html($container);
        },

        showCarsByBrand: function (brand) {

            /*
             Очевидное решение в данном случае скрывать не нужные вьюхи display:none, но оно здесь не подходит т.к.
             не позволяет использовать nth-child в css для видимых вьюх. Данный алгоритм позволяет обойти это
             ограничение, а также снижает кол-во DOM операций до 2-х.
             */
            var $container = $(document.createDocumentFragment());

            this.$el.children().detach();

            this.views.forEach((function (view) {

                switch (brand) {

                    case view.model.get('brand'):
                        $container.append(view.$el);
                        break;

                    case 'All':
                        $container.append(view.$el);
                        break;

                }

            }).bind(this));

            this.$el.html($container);
        },

        setViewFavoriteModel: function(favoriteModel){
            _.find(this.views, function(view){
                return view.model.id === favoriteModel.id;
            }).setFavoriteModel(favoriteModel);
        }

    });

});

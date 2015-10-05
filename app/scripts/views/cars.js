define(['backbone', 'CarView'], function (Backbone, CarView) {
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

                if (brand === view.model.get('brand')) {
                    $container.append(view.$el);
                    return;
                }

                if (brand === 'All') {
                    $container.append(view.$el);
                    return;
                }

            }).bind(this));

            this.$el.html($container);
        }

    });

});

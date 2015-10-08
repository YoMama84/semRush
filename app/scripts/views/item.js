define(['backbone', 'JST'], function (Backbone, JST) {
    'use strict';

    //Базовый класс для элементов списка
    return Backbone.View.extend({

        tagName: 'tr',

        className: 'table__item',

        initialize: function (options) {
            this.favoriteModel = options.favoriteModel;
            this.render();
        },

        render: function () {
            this.$el.html( this.template( this.model.getUnitedJSON(this.favoriteModel) ));
        }
    });

});

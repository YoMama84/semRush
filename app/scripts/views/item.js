define(['backbone', 'JST'], function (Backbone, JST) {
    'use strict';

    return Backbone.View.extend({

        template: JST['app/scripts/templates/auto.ejs'],

        tagName: 'tr',

        className: 'table__item',

        initialize: function (options) {
            this.favoriteModel = options.favoriteModel;
            this.render();

            this.listenTo(this.favoriteModel, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.favoriteModel.getUnitedJSON(this.model)));
        }
    });

});

define(['backbone', 'JST'], function (Backbone, JST) {
    'use strict';

    return Backbone.View.extend({

        el: '#photo-enlarge',
        template: JST['app/scripts/templates/photo.ejs'],

        show: function (event, model) {
            this.$el.show();
            this.$el.html(this.template(model.toJSON()));
        },

        hide: function () {
            this.$el.hide();
        }


    });

});

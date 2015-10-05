define(['backbone'], function (Backbone) {
    'use strict';

    return Backbone.Model.extend({

        initialize: function () {
            this.on('change', function () {
                this.save();
            });
        },

        increaseCounter: function () {
            this.set('counter', this.get('counter') + 1);
        }
    });

});

define(['backbone'], function (Backbone) {
    'use strict';

    return Backbone.Model.extend({
        increaseCounter: function () {
            this.set('counter', this.get('counter') + 1);
        }
    });

});

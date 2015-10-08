define(['backbone'], function (Backbone) {
    'use strict';

    return Backbone.Model.extend({

        getUnitedJSON: function (favoriteModel) {
            var result = _.clone(this.attributes);
            if (!!favoriteModel) {
                result.isFavorite = true;
            } else {
                result.isFavorite = false;
            }

            return result;
        }

    });
});

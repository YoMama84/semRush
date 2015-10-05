define(['backbone', 'CarModel'], function (Backbone, CarModel) {
    'use strict';

    return Backbone.Collection.extend({
        model: CarModel,
        url: '/scripts/data/cars.json',

        getDistinctBrands: function () {
            var result = {};
            this.pluck('brand').forEach(function (brand) {
                result[brand] = null;
            });

            return Object.keys(result);
        }
    });

});

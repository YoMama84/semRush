define([
    'backbone',
    'StatisticsView',
    'StatisticsCollection'
], function (Backbone,
             StatisticsView,
             StatisticsCollection) {
    'use strict';

    return {
        init: function () {

            this.statisitcsCollection = new StatisticsCollection();

            $.when(this.statisitcsCollection.fetch()).done((function() {
                new StatisticsView({
                    el: '#statisticsTab',
                    collection: this.statisitcsCollection
                });
            }).bind(this));

            Backbone.on('cars:makeFavorite', this.updateStatistics, this);
        },

        updateStatistics: function (model) {
            this.statisitcsCollection.increaseByName(model.get('brand'));
        }
    };

});

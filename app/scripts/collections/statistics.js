
define(['backbone', 'StatisticsModel', 'localstorage'], function (Backbone, StatisticsModel) {
    'use strict';

    return Backbone.Collection.extend({
        model: StatisticsModel,
        localStorage: new Backbone.LocalStorage('StatisticsCollection'),

        initialize: function(){
            this.on('add', function (model) {
                model.save();
            });
        },

        increaseByName: function(name){
            var model = this.findWhere({'name': name});

            if(!model){
               this.add({
                   'name': name,
                   'counter': 1
               });
                return;
            }

            model.increaseCounter();
        }
    });

});

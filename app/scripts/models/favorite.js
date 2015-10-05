define (['backbone'], function (Backbone) {
    'use strict';
    return Backbone.Model.extend({

        defaults:{
            isFavorite: false
        },

        initialize: function(){
          this.on('change', function(){
              this.save();
          });
        },

        getUnitedJSON: function (model) {
            var result = _.clone(model.attributes);
            result.isFavorite = this.get('isFavorite');
            return result;
        }

    });

});

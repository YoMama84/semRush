define(['backbone', 'JST'], function (Backbone, JST) {
    'use strict';

    return Backbone.View.extend({

        el: '#filter',
        template: JST['app/scripts/templates/filter.ejs'],
        selectedModificator: 'filter__item--selected',

        events: {
            'click .filter__item': function (event) {
                this.toggleFilter(event);
                this.triggerFilterChange(event);
            }
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            var $container = $(document.createDocumentFragment());
            $container.append( $( this.template({brand: 'All'}) ).addClass(this.selectedModificator) );

            _.each(this.collection.getDistinctBrands(), function (brand) {
                $container.append(this.template({brand: brand}));
            }, this);

            this.$el.html($container);
        },

        toggleFilter: function (event) {
            this.$el.find('.' + this.selectedModificator).removeClass(this.selectedModificator);
            $(event.target).addClass(this.selectedModificator);

        },

        //Сообщаем системе что состояние фильтра изменилось
        triggerFilterChange: function (event) {
            Backbone.trigger('filter:change', $(event.target).data('brand'));
        }
    });

});

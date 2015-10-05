
define(['jquery', 'backbone'], function ($, Backbone) {
    'use strict';

    return Backbone.View.extend({

        events: {
            'click .tab-view__tab': 'switchTab'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        switchTab: function(event){

            //Скрываем старую вкладку
            this.$el.find('.tab-view__content--active').removeClass('tab-view__content--active');
            this.$el.find('.tab-view__tab--active').removeClass('tab-view__tab--active');

            //Показываем выбранную вкладку
            $(event.target).addClass('tab-view__tab--active');
            this.$el.find('#' + $(event.target).data('tab')).addClass('tab-view__content--active');

        }

    });

});

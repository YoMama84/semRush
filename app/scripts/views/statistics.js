define([
    'backbone',
    'goog!visualization,1,packages:[corechart,geochart]'
], function (Backbone) {
    'use strict';

    return Backbone.View.extend({


        initialize: function () {
            this.listenTo(this.collection, 'change add', this.updateData);

            this.opacity = 'opacity: 0.4';

            this.options = {
                title: 'Статистика выбора автомобилей по брендам',
                width: 970,
                height: 530,
                bar: {groupWidth: '50%'},
                legend: {position: 'none'},
                backgroundColor: {fill: '#fafafa'}
            };
            this.data = new google.visualization.DataTable();

            this.chart = new google.visualization.ColumnChart(this.$el.get(0));
            this.addColumns();
            this.addRows();

            this.render();
        },

        render: function () {
            this.chart.draw(this.data, this.options);
        },

        addColumns: function () {
            this.data.addColumn('string', 'Brand');
            this.data.addColumn('number', 'Counter');
            this.data.addColumn({type: 'string', role: 'style'});
            this.data.addColumn({type: 'number', role: 'annotation'});
        },

        addRows: function () {
            var rows = this.collection.map(function (value) {
                // Дубликат каунтера нужен для аннотации колонки
                return [value.get('name'), value.get('counter'), this.opacity, value.get('counter')];
            }, this);

            this.data.addRows(rows);
        },

        updateData: function () {
            this.data.removeRows(0, this.data.getNumberOfRows());
            this.addRows();
            this.render();
        }

    });

});

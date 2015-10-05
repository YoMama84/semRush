define(['TabsView'], function (TabsView) {
    'use strict';
    return {
        init: function () {
            new TabsView({el: '.tab-view'});
        }
    };
});

(function () {
    'use strict';

    newSp.component('newSpTopNav', {
        controllerAs: 'vm',
        controller: function () {
            var ctrl = this;
        },
        templateUrl: '/style library/newsp/app/templates/top-nav.html',
        bindings: {
            title: '@'
        }
    });

    newSp.component('newSpHeader', {
        controllerAs: 'vm',
        controller: function () {
            var ctrl = this;
        },
        templateUrl: '/style library/newsp/app/templates/glb-header.html',
        bindings: {
            title: '@'
        }
    });

    newSp.component('newSpFooter', {
        controllerAs: 'vm',
        controller: function () {
            var ctrl = this;
        },
        templateUrl: '/style library/newsp/app/templates/glb-footer.html',
        bindings: {
            title: '@'
        }
    });

})();
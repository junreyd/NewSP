(function () {
    'use strict';

    newSP.component('newSPTopNav', {
        controllerAs: 'vm',
        controller: function () {
            var ctrl = this;
        },
        templateUrl: '/style library/newsp/app/templates/top-nav.html',
        bindings: {
            title: '@'
        }
    });

    newSP.component('newSPHeader', {
        controllerAs: 'vm',
        controller: function () {
        },
        templateUrl: '/style library/newsp/app/templates/glb-header.html',
        bindings: {
            title: '@'
        }
    });

    newSP.component('newSPFooter', {
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
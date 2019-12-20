(function () {
    'use strict';

    newSp.component('newSpTopNav', {
        controllerAs: 'vm',
        controller: function (svc) {
            var ctrl = this;
            ctrl.siteUrl = svc.getSiteUrl();
            ctrl.tempUrl = svc.getTemplateUrl('top-nav.html');

            ctrl.$onInit = function () {
                svc.getUserProfile().then(function (c) {
                    ctrl.items = c;
                });
            }
        },
        template: "<div ng-include='vm.tempUrl'></div>",
        bindings: {
            title: '@'
        }
    });

    newSp.component('newSpSideBar', {
        controllerAs: 'vm',
        controller: function (svc) {
            var ctrl = this;
            ctrl.siteUrl = svc.getSiteUrl();
            ctrl.tempUrl = svc.getTemplateUrl('main-sidebar.html');
        },
        template: "<div ng-include='vm.tempUrl'></div>",
        bindings: {
            title: '@'
        }
    });

    newSp.component('newSpMainFooter', {
        controllerAs: 'vm',
        controller: function (svc) {
            var ctrl = this;
            ctrl.siteUrl = svc.getSiteUrl();
            ctrl.tempUrl = svc.getTemplateUrl('main-footer.html');
        },
        template: "<div ng-include='vm.tempUrl'></div>",
        bindings: {
            title: '@'
        }
    });

    newSp.component('newSpCtrlSidebar', {
        controllerAs: 'vm',
        controller: function (svc) {
            var ctrl = this;
            ctrl.siteUrl = svc.getSiteUrl();
            ctrl.tempUrl = svc.getTemplateUrl('control-sidebar.html');
        },
        template: "<div ng-include='vm.tempUrl'></div>",
        bindings: {
            title: '@'
        }
    });

    //newSp.component('newSpHeader', {
    //    controllerAs: 'vm',
    //    controller: function (svc) {
    //        var ctrl = this;
    //        ctrl.tempUrl = svc.getTemplateUrl('glb-header.html');
    //    },
    //    template: "<div ng-include='vm.tempUrl'></div>",
    //    bindings: {
    //        title: '@'
    //    }
    //});

    //newSp.component('newSpFooter', {
    //    controllerAs: 'vm',
    //    controller: function (svc) {
    //        var ctrl = this;
    //        ctrl.tempUrl = svc.getTemplateUrl('glb-footer.html');
    //    },
    //    template: "<div ng-include='vm.tempUrl'></div>",
    //    bindings: {
    //        title: '@'
    //    }
    //});

    //newSp.component('newSpBlog', {
    //    controllerAs: 'vm',
    //    controller: function (svc) {
    //        var ctrl = this;
    //        ctrl.tempUrl = svc.getTemplateUrl('blog.html');
    //        ctrl.imageUrl = svc.getImagesDirUrl();
    //    },
    //    template: "<div ng-include='vm.tempUrl'></div>",
    //    bindings: {
    //        title: '@'
    //    }
    //});

    //newSp.component('newSpBrowse', {
    //    controllerAs: 'vm',
    //    controller: function (svc) {
    //        var ctrl = this;
    //        ctrl.tempUrl = svc.getTemplateUrl('browse.html');

    //        svc.getJobCategories().then(function (c) {
    //            ctrl.items = c;
    //        });
    //    },
    //    template: "<div ng-include='vm.tempUrl'></div>",
    //    bindings: {
    //        title: '@'
    //    }
    //});

})(); //end of main func
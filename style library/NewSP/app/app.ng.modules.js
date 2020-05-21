var newSp = angular.module('newSp', ['ui.router']);


newSp.config(['$stateProvider', '$urlRouterProvider', '$qProvider', function ($stateProvider, $urlRouterProvider, $qProvider) {
    console.log($urlRouterProvider)
    $urlRouterProvider.otherwise('/second');
    $qProvider.errorOnUnhandledRejections(false);
    $stateProvider.state('ceo', {
        url: '/ceo',
        templateUrl: 'https://intranet.houseofit.com.au/style library/NewSP/app/templates/first.html'
    });

    $stateProvider.state('second', {
        url: '/second',
        templateUrl: 'https://intranet.houseofit.com.au/style library/NewSP/app/templates/second.html'
    });

}]);

//ngRoute
//newSp.config(['$qProvider', '$routeProvider', '$locationProvider',
//    function ($qProvider, $routeProvider, $locationProvider) {
        
//        $qProvider.errorOnUnhandledRejections(false);
       

//        $routeProvider

//            .when('/ceo', {
//                templateUrl: 'https://intranet.houseofit.com.au/style library/NewSP/app/templates/first.html',
//                controller: 'FirstController',
//                //controllerAs: 'vm',
//                //controller: function (svc) {
//                //var ctrl = this;
//                //ctrl.siteUrl = svc.getSiteUrl();
//                //ctrl.tempUrl = svc.getTemplateUrl('first.html');

//                //},
//                //template: "<div ng-include='vm.tempUrl'></div>",
//                //bindings: {
//                //    title: '@'
//                //}
//            })

//            .when('/second', {
//                templateUrl: 'pages/second.html',
//                controller: 'SecondController'
//            })

//            .when('/third', {
//                templateUrl: 'pages/third.html',
//                controller: 'ThirdController'
//            })

//            .otherwise({ redirectTo: '/sp/Pages/home.aspx/' });

//        $locationProvider.html5Mode(true);
//        //$locationProvider.html5Mode({
//        //    enabled: true,
//        //    requireBase: false
//        //});
//}]);

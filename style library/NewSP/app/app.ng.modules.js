var newSp = angular.module('newSp', ['ngRoute']);


newSp.config(['$qProvider', '$routeProvider', function ($qProvider, $routeProvider) {
    $qProvider.errorOnUnhandledRejections(false);
    $routeProvider

        .when('/', {
            templateUrl: 'pages/first.html',
            controller: 'FirstController'
        })

        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'SecondController'
        })

        .when('/third', {
            templateUrl: 'pages/third.html',
            controller: 'ThirdController'
        })

        .otherwise({ redirectTo: '/' });
}]);

var newSp = angular.module('newSp', ['ngRoute']);

newSp.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'home.aspx/first.html',
            controller: 'FirstController'
        })

        .when('/blog', {
            templateUrl: 'home.aspx/second.html',
            controller: 'SecondController'
        })

        .when('/about', {
            templateUrl: 'home.aspx/third.html',
            controller: 'ThirdController'
        })

        .otherwise({ redirectTo: '/' });
});


newSp.controller('FirstController', function ($scope) {
    $scope.message = 'Hello from FirstController';
});

newSp.controller('SecondController', function ($scope) {
    $scope.message = 'Hello from SecondController';
});

newSp.controller('ThirdController', function ($scope) {
    $scope.message = 'Hello from ThirdController';
});
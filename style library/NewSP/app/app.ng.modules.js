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


newSp.controller('FirstController', ['$scope', function ($scope, svc) {
    $scope.message = 'Hello from FirstController';
    console.log("FirstController")
    console.log(svc);
}]);

newSp.controller('SecondController', function ($scope) {
    $scope.message = 'Hello from SecondController';
    console.log("SecondController")
});

newSp.controller('ThirdController', function ($scope) {
    $scope.message = 'Hello from ThirdController';
    console.log("ThirdController")
});


//newSp.controller('FirstController', ['$scope', '$location', '$log',
//    function ($scope, $location, $log) {

//        $log.info($location.path());

//    }
//])
(function () {
    'use strict';

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


})();
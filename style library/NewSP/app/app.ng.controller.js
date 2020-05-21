(function () {
    'use strict';

    newSp.controller('FirstController', ['$scope', 'svc', '$templateCache',
        function ($scope, svc, $templateCache) {
            $scope.message = 'CEO Dashboard';
            console.log("FirstController")
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
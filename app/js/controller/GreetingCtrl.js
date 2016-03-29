(function () {
    'use strict';

    /**
     * @ngdoc controller
     * @name myApp:GreetingCtrl
     *
     * @description
     *
     *
     * @requires $scope
     * */


    function GreetingCtrl($scope) {
        $scope.greeting = "Hola!";
    }

    GreetingCtrl.$inject = [
        '$scope'
    ];

    angular
        .module('myApp')
        .controller('GreetingCtrl', GreetingCtrl);

})();
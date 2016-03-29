(function () {
    'use strict';

    /**
     * @ngdoc controller
     * @name myApp:DoubleCtrl
     *
     * @description
     *
     *
     * @requires $scope
     * */

    /* ****************************************************** CALLED FUNCTION */
    function DoubleCtrl($scope) {

        $scope.double = function(value) {
            return value * 2;
        };

    }

    /* ************************************************* DEPENDENCY INJECTION */
    DoubleCtrl.$inject = [
        '$scope'
    ];

    /* **************************************************** DOUBLE CONTROLLER */
    angular
        .module('myApp')
        .controller('DoubleCtrl', DoubleCtrl);

})();

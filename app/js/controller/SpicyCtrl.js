(function () {
    'use strict';

    /**
     * @ngdoc controller
     * @name myApp:SpicyCtrl
     *
     * @description
     *
     *
     * @requires $scope
     * */

    /* ****************************************************** CALLED FUNCTION */
    function SpicyCtrl($scope) {

        $scope.customSpice ="peperoncino";

        $scope.spice ="chili";

        $scope.spicy = function(customSpice) {
            $scope.spice = customSpice;
        };

    }

    /* ************************************************* DEPENDENCY INJECTION */
    SpicyCtrl.$inject = [
        '$scope'
    ];

    /* **************************************************** SPICY CONTROLLER */
    angular
        .module('myApp')
        .controller('SpicyCtrl', SpicyCtrl);

})();
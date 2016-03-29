(function () {
    'use strict';

    /**
     * @ngdoc controller
     * @name myApp:studentCtrl
     *
     * @description
     *
     *
     * @requires $scope
     * */

    /* ****************************************************** CALLED FUNCTION */
    function studentCtrl($scope) {

        $scope.reset = function() {
            $scope.firstName = "German";
            $scope.lastName = "Bisurgi";
            $scope.email = "German@tocooltobenominated.awesome";
        }

        $scope.reset();

    }

    /* ************************************************* DEPENDENCY INJECTION */
    studentCtrl.$inject = [
        '$scope'
    ];

    /* *************************************************** STUDENT CONTROLLER */
    angular
        .module('myApp')
        .controller('studentCtrl', studentCtrl);

})();
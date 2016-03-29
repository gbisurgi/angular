(function () {
    'use strict';

    /**
     * @ngdoc controller
     * @name myApp:ajaxCtrl
     *
     * @description
     *
     *
     * @requires $scope
     * */

    /* ****************************************************** CALLED FUNCTION */
    function ajaxCtrl($scope, $http) {

        var url = "data.txt";

        $http.get(url).success(function(data) {
            $scope.students = data;
        });

    }

    /* ************************************************* DEPENDENCY INJECTION */
    ajaxCtrl.$inject = [
        '$scope', '$http'
    ];

    /* ****************************************************** AJAX CONTROLLER */
    angular
        .module('myApp')
        .controller('ajaxCtrl', ajaxCtrl);

})();

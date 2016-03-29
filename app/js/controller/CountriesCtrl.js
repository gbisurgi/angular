(function () {
    'use strict';

    /**
     * @ngdoc controller
     * @name myApp:CountriesCtrl
     *
     * @description
     *
     *
     * @requires $scope
     * */

    /* ****************************************************** CALLED FUNCTION */
    function CountriesCtrl($scope) {

        $scope.countries = [
            {locale:'en-US',name:'United States'},
            {locale:'en-FR',name:'France'},
            {locale:'en-GB',name:'United Kingdom'}
        ];
    }

    /* ************************************************* DEPENDENCY INJECTION */
    CountriesCtrl.$inject = [
        '$scope'
    ];

    /* **************************************************** COUNTRIES CONTROLLER */
    angular
        .module('myApp')
        .controller('CountriesCtrl', CountriesCtrl);

})();
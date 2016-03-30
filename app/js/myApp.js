var myApp = angular.module('myApp' , ['ngRoute']);


myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider

    .when('/addStudent', {
        templateUrl: 'partials/addStudent.html',
        controller: 'AddStudentCtrl'
    })

    .when('/viewStudents', {
        templateUrl: 'partials/viewStudents.html',
        controller: 'ViewStudentsCtrl'
    })

    .otherwise({
        redirectTo: '/'
    });
}]);









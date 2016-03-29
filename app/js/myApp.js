var myApp = angular.module('myApp' , ['ngRoute']);


myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider

    .when('/addStudent', {
        templateURL: 'partials/addStudent.html',
        controller: 'AddStudentCtrl'
    })

    .when('/viewStudents', {
        templateURL: 'partials/viewStudents.html',
        controller: 'ViewStudentsCtrl'
    })

    .otherwise({
        //redirectTo: '/addStudent'
    });
}]);









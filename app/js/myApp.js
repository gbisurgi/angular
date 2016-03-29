var myApp = angular.module('myApp' , ['ngRoute']);


myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider

    .when('/addStudent', {
        templateURL: 'partials/addStudent.html',
        controller: 'AddStudentCtrl'
    })

    .when('/viewStudents', {
        template: '<p>paragraph</p>',
        controller: 'ViewStudentsCtrl'
    })

    .otherwise({
        redirectTo: '/'
    });
}]);









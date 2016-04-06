

angular.module('myApp.users',['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/users', {
            templateUrl: 'users/users.html',
            controller: 'UsersController'
        });
    }])
    .controller('UsersController', [
        '$scope',function UserController($scope){
            $scope.hello = 'Zdrasti'
        }
    ]);
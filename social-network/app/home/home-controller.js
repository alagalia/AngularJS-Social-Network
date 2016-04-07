'use strict';

angular.module('socialNetwork.home', [
    'socialNetwork.users.authentication'
])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/home', {
                templateUrl: 'app/home/home.html',
                controller: 'HomeCtrl'
            })

        }
    ])
    .controller('HomeCtrl', [
        '$scope',
        'authentication',
        function ($scope, authentication) {
            $scope.login = function(user){
                authentication.loginUser(user)
                    .then(function(loginUser){
                        console.log(loginUser)
                    });
            };

            $scope.register = function(user){
                authentication.registerUser(user)
                    .then(function(registeredUser){
                        console.log(registeredUser)
                    })
            };

            $scope.logOut = function(){
                authentication.logOut();
            }
        }]);

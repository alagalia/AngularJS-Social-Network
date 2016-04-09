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
        '$location',
        function ($scope, authentication, $location) {
            $scope.login = function(user){
                authentication.loginUser(user)
                    .then(function(loggedInUser){
                        $scope.token = loggedInUser.access_token;
                        console.log( $scope.token);
                        $location.path('/newsFeed');
                    });
            };

            $scope.register = function(user){
                authentication.registerUser(user)
                    .then(function(registeredUser){
                        console.log(registeredUser)
                    })
            };

            $scope.logOut = function(){
                console.log("Logged out");
                authentication.logOut();
            }

        }]);

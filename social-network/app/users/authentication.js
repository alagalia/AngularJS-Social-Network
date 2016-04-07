'use strict';

angular.module('socialNetwork.users.authentication', [])
.factory('authentication', [
    '$http',
    '$q',
    'BASE_URL',
    function($http, $q, BASE_URL){
        function registerUser(user){
            var deferred = $q.defer();

            $http.post(BASE_URL + 'users/Register', user)
                .then(function(response){
                    deferred.resolve(response.data)
                }, function(err){
                });

            return deferred.promise;
        }

        function loginUser(user){
            var deferred = $q.defer();

            $http.post(BASE_URL + 'users/Login', user)
                .then(function(response){
                    deferred.resolve(response.data)
                }, function(err){
                    deferred.reject(err)
                });

            return deferred.promise;
        }

        function logOut(){

        }


        return {
            registerUser : registerUser,
            loginUser : loginUser,
            logOut : logOut
        }
}]);
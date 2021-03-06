'use strict';

angular.module('testApp')
    .factory('httpInterceptor', function ($q, $window, $location) {
        return function (promise) {
            var success = function (response) {
                return response;
            };

            var error = function (response) {
                if (response.status === 401) {
                    $location.url('/auth');
                }

                return $q.reject(response);
            };

            return promise.then(success, error);
        };
    });

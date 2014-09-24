'use strict';

angular.module('testApp')
    .factory('authToken', ['$http', function ($http) {

        return {
            getToken: function (credentials) {
                return { token: credentials.user + '::' + credentials.pass };
                //return $http.post(url + '/auth', credentials);
            }
        }

    }]);
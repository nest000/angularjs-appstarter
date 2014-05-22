'use strict';

angular.module('testApp')
    .factory('authToken', ['$resource', function ($resource) {

        var auth = {};

        auth.getToken = function (credentials) {
            return { token : credentials.user + '::' + credentials.pass };
        }

        return auth;

    }]);
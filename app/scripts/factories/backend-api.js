'use strict';

angular.module('testApp')
    .factory('backendApi', ['$http', function ($http) {

        var baseUrl = 'http://rest-service.guides.spring.io';
        var api = {};

        api.getGreeting = function () {
            return $http.get(baseUrl + '/greeting');
        };

        return api;

    }]);
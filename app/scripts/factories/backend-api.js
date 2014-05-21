'use strict';

angular.module('testApp')
    .factory('backendApi', ['$resource', function ($resource) {

        var api = {};

        var twitterResource = $resource('http://public-api.wordpress.com/rest/v1/sites/:page/:action',
            { callback: 'JSON_CALLBACK' },
            { get: { method: 'JSONP'} }
        );

        api.getResult = function(callback) {
            twitterResource.get({ action: 'posts', page: 'wtmpeachtest.wordpress.com' }, callback);
        }

        return api;

    }]);
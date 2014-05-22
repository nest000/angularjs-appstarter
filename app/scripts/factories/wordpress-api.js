'use strict';

angular.module('testApp')
    .factory('wordpressApi', ['$resource', function ($resource) {

        var api = {};

        var resource = $resource('http://public-api.wordpress.com/rest/v1/sites/:page/:action',
            { callback: 'JSON_CALLBACK' },
            { get: { method: 'JSONP'} }
        );

        api.load = function(page) {
            return resource.get({ action: 'posts', page: page, pretty: 1, number: 5 });
        }

        return api;

    }]);
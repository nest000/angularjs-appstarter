'use strict';

angular
    .module('testApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/auth', {
                templateUrl: 'views/auth.html',
                controller: 'AuthCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        $httpProvider.defaults.useXDomain = true;
    });
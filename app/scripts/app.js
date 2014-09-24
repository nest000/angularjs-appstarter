'use strict';

var app = angular.module('testApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap'
]);

app.config(function ($routeProvider, $httpProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/auth', {
            templateUrl: 'views/auth.html',
            controller: 'AuthCtrl'
        })
        .when('/wordpress-api', {
            templateUrl: 'views/wordpress-api.html',
            controller: 'WordpressApiCtrl'
        })
        .otherwise({
            templateUrl: '404.html'
        });

    $httpProvider.responseInterceptors.push('httpInterceptor');

});

app.run(function (api) {
    api.init();
});
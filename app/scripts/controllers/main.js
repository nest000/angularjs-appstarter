'use strict';

angular.module('testApp')
    .controller('MainCtrl', function ($scope, $log, backendApi) {

        $scope.list = {};

        backendApi.getGreeting()
            .success(function(greeting) {
                $scope.list = [ greeting ];
            })

    });

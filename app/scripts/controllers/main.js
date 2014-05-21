'use strict';

angular.module('testApp')
    .controller('MainCtrl', function ($scope, $resource, $log, backendApi) {

        //$scope.doSearch = function() {
            backendApi.getResult(function(res) {
                $scope.apiResult = res;
            });
        //}

    });
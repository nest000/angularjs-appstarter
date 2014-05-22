'use strict';

angular.module('testApp')
  .controller('WordpressApiCtrl', function ($scope, wordpressApi) {

        $scope.pages = [
            'wtmpeachtest.wordpress.com',
            'en.blog.wordpress.com',
            'tarnaeluin.houseofbeor.net'
        ];

        $scope.$watch('page', function(page, current) {
            if (page !== current) {
                $scope.apiResult = wordpressApi.load(page);
            }
        });

    });

'use strict';

angular.module('testApp')
  .controller('AuthCtrl', ['$scope', 'authToken', function ($scope, authToken) {

        $scope.login = function() {
            $scope.token = authToken.getToken({
                user : $scope.userEmail,
                pass : $scope.userPass
            });
        }
  }]);
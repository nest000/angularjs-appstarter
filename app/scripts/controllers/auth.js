'use strict';

angular.module('testApp')
  .controller('AuthCtrl', function ($scope) {

        $scope.login = function() {
            alert($scope.userEmail + ' :: ' + $scope.userPass);
        }
  });

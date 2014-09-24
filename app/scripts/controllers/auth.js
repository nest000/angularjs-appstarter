'use strict';

angular.module('testApp')
  .controller('AuthCtrl', ['$scope', 'authToken', function ($scope, authToken, auth, api) {

        $scope.login = function () {
            auth.login({
                username: this.username,
                token: this.token
            }).success(function (data) {
                api.init(data.token);
                $cookieStore.put('token', data.token);
                $location.path('/');
            }).error(function () {

            });
        };

        $scope.login = function() {
            $scope.token = authToken.getToken({
                user : $scope.userEmail,
                pass : $scope.userPass
            });
        }

  }]);
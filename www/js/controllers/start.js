angular.module('start.controllers', [])

.controller('startCtrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval) {

  $scope.goSignUp = function() {
    $state.go("signup");
  };

  $scope.goLogIn = function() {
    $state.go("login");
  };

});
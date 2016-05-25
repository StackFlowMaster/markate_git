angular.module('login.controllers', [])

.controller('loginCtrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval) {
    $scope.goFacebook = function() {

    };

    $scope.goGoogle = function() {

    };

    $scope.goEmail = function() {
      $state.go("loginex");
    };

    $scope.goBack = function() {
      $state.go("start");
    };
});
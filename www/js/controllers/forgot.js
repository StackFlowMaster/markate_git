angular.module('forgot.controllers', [])

.controller('forgotCtrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval) {
    $scope.goBack = function() {
      $state.go("loginex");
    };
});
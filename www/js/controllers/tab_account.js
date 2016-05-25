angular.module('tab_account.controllers', [])

.controller('tabAccountCtrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval) {

    $scope.goBack = function() {
      $state.go("app.home");
    };

    $scope.goView = function() {
      $state.go("tab.profile");
    };

    $scope.goEdit = function() {
      alert("Edit");
    };

});
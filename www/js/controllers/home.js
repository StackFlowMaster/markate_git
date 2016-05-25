angular.module('home.controllers', [])

.controller('homeCtrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval) {

    $scope.goBack = function() {
      $state.go("login");
    };

    $scope.goRequest = function() {
      $state.go("req-tab.myhome");
    };

    $scope.goDeal = function() {
      $state.go("deal-list");
    };

    $scope.goSearch = function() {
      $state.go("search-proc");
    };

    $scope.goTrack = function() {
      $state.go("track-tabs.request");
    };

    $scope.goEmergency = function() {
      $state.go("emergency");
    };

});
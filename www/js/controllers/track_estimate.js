angular.module('track_estimate.controllers', [])

.controller('track_estimate_Ctrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval) {

    $scope.goBack = function() {
      $state.go("track-tabs.request");
    };

    $scope.sel_job = "Job #1";


});
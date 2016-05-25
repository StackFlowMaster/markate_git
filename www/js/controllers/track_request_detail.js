angular.module('track_request_detail.controllers', [])

.controller('track_request_detail_Ctrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval) {

    $scope.goBack = function() {
      $state.go("track-tabs.request");
    };

    $scope.goInvite = function() {
    	$state.go("track-tabs.request");
    };

    $scope.goSelect = function() {
    	$state.go("search-proc");
    };

});
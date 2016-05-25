angular.module('track_estimate_detail.controllers', [])

.controller('track_estimate_detail_Ctrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval) {

	$scope.confirm = true;

    $scope.goBack = function() {
      $state.go("track-tabs.estimate");
    };

    $scope.goConfirm = function() {
    	$state.go("track-estimate-sign");
    };

});
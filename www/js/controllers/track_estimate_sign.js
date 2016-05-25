angular.module('track_estimate_sign.controllers', [])

.controller('track_estimate_sign_Ctrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval) {

	$scope.confirm = true;

    $scope.goBack = function() {
      $ionicHistory.goBack();
    };

    $scope.goConfirm = function() {
    	$state.go("track-estimate-detail");
    };

});
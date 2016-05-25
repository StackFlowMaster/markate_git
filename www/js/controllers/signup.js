angular.module('signup.controllers', [])

.controller('signupCtrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval) {
    $scope.goFacebook = function() {

    };

    $scope.goGoogle = function() {

    };

    $scope.goEmail = function() {
    	$state.go("signupex");
    };

    $scope.goBack = function() {
      $state.go("start");
    };
});
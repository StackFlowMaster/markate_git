angular.module('tab_profile.controllers', [])

.controller('tabProfileCtrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval) {

    $scope.goBack = function() {
      $state.go("app.home");
    };

    $scope.bAction = true;
    $scope.bTitle = "More info";

	$scope.ratingsObject = {
		iconOn : 'ion-ios-star',
		iconOff : 'ion-ios-star-outline',
		iconOnColor: '#2bde73',
		iconOffColor: '#bbbbbb',
		rating:  2,
		minRating:1,
		callback: function(rating) {
		  $scope.ratingsCallback(rating);
		}
	};

	$scope.ratingsCallback = function(rating) {
		console.log('Selected rating is : ', rating);
	};

	$scope.goAccount = function() {
		$state.go("tab.account");
	};

	$scope.goMoreInfo = function() {
		if($scope.bAction) {
			$scope.bAction = false;
			$scope.bTitle = "About & Review";
		} else {
			$scope.bAction = true;
			$scope.bTitle = "More info";
		}
	};
    

});
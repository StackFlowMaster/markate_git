angular.module('req_car_step_9.controllers', ['ionic.rating'])

.controller('reqCarStep_9_Ctrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval) {

    $scope.goBack = function() {
      $ionicHistory.goBack();
    };

    $scope.goReset = function() {
    	$scope.rating.rate = 3.5;
    }

    $scope.data = [{desc:""}];

    $scope.rating = {};
	$scope.rating.rate = 3.5;
	$scope.rating.max = 5;
	/*
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
	*/

	$scope.cred_lists = [
		{ active:"on" },
		{ active:"on" },
		{ active:"on" },
		{ active:"on" },
		{ active:"on" },
		{ active:"on" }
	]

	$scope.change_cred = function(index) {
		if($scope.cred_lists[index].active == "on") {
			$scope.cred_lists[index].active = "off";
		} else {
			$scope.cred_lists[index].active = "on";
		}
	};

    $scope.goFilter = function() {
        $state.go("req-car-step-8");
    };

});
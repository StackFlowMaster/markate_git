angular.module('req_car_step_8.controllers', [])

.controller('reqCarStep_8_Ctrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval, $ionicModal) {

    $scope.goBack = function() {
      $ionicHistory.goBack();
    };

    $scope.goFilter = function() {
		$ionicHistory.nextViewOptions({
		    disableAnimate: true
		});
    	$state.go("req-car-step-9");
    };

    $scope.goCompare = function() {
    	$state.go("req-car-step-10");
    };
 
    $scope.invite_pros = [
    	{
    		name:"Alie Heng",
    		url:"http://www.placeimg.com/30/30/people/0",
    		checked : true,
    		rating: 4
    	},
    	{
    		name:"Leona Charles",
    		url:"http://www.placeimg.com/30/30/people/1",
    		checked : false,
    		rating: 3
    	},
    	{
    		name:"Alie Heng",
    		url:"http://www.placeimg.com/30/30/people/2",
    		checked : false,
    		rating: 4
    	}
    ];

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

    $scope.goSave = function() {
        console.log($scope.data);
        // $state.go("req-6-tab.camera");
    };

    $scope.goEstimate = function() {
		$scope.openEstimateModal();
    }

	/***** Estimate Dialog *****/

    $scope.estimate_data = [
    	{id:0,
    	pros_name:"Alie",
    	pros_url: "http://www.placeimg.com/30/30/people/0"},
    	{id:1,
    	pros_name:"Henry",
    	pros_url: "http://www.placeimg.com/30/30/people/1"},
    	{id:2,
    	pros_name:"Ruud",
    	pros_url: "http://www.placeimg.com/30/30/people/2"},
    ];

	$ionicModal.fromTemplateUrl('templates/estimate.html', {
      scope: $scope,
      animation: 'slide-in-right'
    }).then(function(modal) {
      $scope.estimate_modal = modal;
    });

  	$scope.openEstimateModal = function(){
    	$scope.estimate_modal.show();
  	};

  	$scope.closeEstimateModal = function(){
    	$scope.estimate_modal.hide();
  	};

  	$scope.goOkay = function() {
  		$scope.closeEstimateModal();
  		$state.go("app.home");
  	}


});
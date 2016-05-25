angular.module('track_payment.controllers', ['ionic.rating'])

.controller('track_payment_Ctrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval, $ionicModal) {

    $scope.goBack = function() {
      $state.go("track-tabs.request");
    };

	/***** Review Dialog *****/

	$scope.rating = {};
	$scope.rating.rate = 3.5;
	$scope.rating.max = 5;

	$ionicModal.fromTemplateUrl('templates/review.html', {
      scope: $scope,
      animation: 'slide-in-right'
    }).then(function(modal) {
      $scope.review_modal = modal;
    });

  	$scope.openReviewModal = function(id) {
  		console.log("ID :", id);
    	$scope.review_modal.show();
  	};

  	$scope.closeReviewModal = function() {
    	$scope.review_modal.hide();
  	};

  	$scope.goOkay = function() {
  		$scope.closeReviewModal();
  		$state.go("track-tabs.request");
  	};



});
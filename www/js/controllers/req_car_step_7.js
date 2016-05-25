angular.module('req_car_step_7.controllers', [])

.controller('reqCarStep_7_Ctrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval, $ionicModal) {

    $scope.goBack = function() {
      $state.go("req-6-tab.camera");
    };

    $scope.car_step_7 = [
        { text: "BY EMAIL AND PHONE ONLY", checked: false },
        { text: "BY EMAIL AND TEXT ONLY", checked: false },
        { text: "BY EMAIL PHONE AND TEXT", checked: true }
    ];

    $scope.data = {
    	phone_number : "",	
    	email : ""
    };

    $scope.goSave = function() {
        $scope.openPopupModal();
    };

    /***** Pop Up Dialog *****/

	$ionicModal.fromTemplateUrl('templates/popup.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.popup_modal = modal;
    });

  	$scope.openPopupModal = function(){
    	$scope.popup_modal.show();
  	};

  	$scope.closePopupModal = function(){
    	$scope.popup_modal.hide();
  	};

  	$scope.goFindMe = function() {
  		$scope.openFindmeModal();
  	};

  	$scope.goInvite = function() {
      $scope.closePopupModal();
  		$state.go("req-car-step-8");
  	};

  	/***** Find Me Dialog *****/

    $scope.pros_data = [
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

	  $ionicModal.fromTemplateUrl('templates/findme.html', {
      scope: $scope,
      animation: 'slide-in-right'
    }).then(function(modal) {
      $scope.findme_modal = modal;
    });

  	$scope.openFindmeModal = function(){
    	$scope.findme_modal.show();
  	};

  	$scope.closeFindmeModal = function(){
    	$scope.findme_modal.hide();
  	};

  	$scope.goOkay = function() {
  		$scope.closeFindmeModal();
  		$scope.closePopupModal();
  		$state.go("app.home");
  	}



});
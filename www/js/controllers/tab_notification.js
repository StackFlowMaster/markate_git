angular.module('tab_notification.controllers', [])

.controller('tabNotificationCtrl', function(BACKEND_API, HEADERS, $rootScope, $state, $filter, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval) {

	$scope.noti_email = true;
	$scope.noti_sms = true;
	$scope.noti_deal = false;
	$scope.noti_mail = false;

    $scope.goBack = function() {
      $state.go("app.home");
    };

    $scope.changeDeal = function(e) {
    	$scope.noti_deal = e;
    };

    $scope.changeEmail = function(e) {
    	$scope.noti_email = e;
    };

    $scope.changeSMS = function(e) {
    	$scope.noti_sms = e;
    };

    $scope.changeMail = function(e) {
    	$scope.noti_mail = e;
    };

    $scope.goSave = function() {
      console.log("Service Email", $scope.noti_email);
      console.log("Service SMS", $scope.noti_sms);
      console.log("Service Deal", $scope.noti_deal);
      console.log("Service Mail", $scope.noti_mail);
    };


});
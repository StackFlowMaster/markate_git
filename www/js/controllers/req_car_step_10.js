angular.module('req_car_step_10.controllers', ['ionic.rating'])

.controller('reqCarStep_10_Ctrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval) {

    $scope.goBack = function() {
      $ionicHistory.goBack();
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

    $scope.pros =
    	{
    		name:"Alie Heng",
    		url:"http://www.placeimg.com/30/30/people/0",
    		checked : true,
    		rating: 4
    	};


});
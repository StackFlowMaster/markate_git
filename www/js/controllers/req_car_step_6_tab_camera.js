angular.module('req_car_step_6_tab_camera.controllers', [])

.controller('reqCarStep_6_camera_Ctrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval) {

    $scope.goBack = function() {
      $ionicHistory.goBack();
    };

    $scope.data = [
    	{id:0,
    	file_name:"iMOVIE_001.mpeg",
    	file_url:"../../afafaljiononen5151.dmg"},
    	{id:1,
    	file_name:"iPICTURE_001.mpeg",
    	file_url:"../../afafal15113213.dmg"},
    	{id:2,
    	file_name:"iVOICE_001.ogg",
    	file_url:"../../afafdafoijccna.dmg"},
    ];

    $scope.goSave = function() {
        console.log($scope.data);
        $state.go("req-car-step-7");
    };

    $scope.goDelete = function(index) {
    	$scope.data.splice(index, 1);
    }

    $scope.goAddFile = function() {
    	var temp = {
    		id : $scope.data.length,
    		file_name : "iMARKATE_" + $scope.data.length,
    		file_url : ""
    	};

    	$scope.data.push(temp);
    }

});
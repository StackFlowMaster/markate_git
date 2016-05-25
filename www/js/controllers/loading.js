angular.module('loading.controllers', [])

.controller('loadingCtrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval) {

    $scope.countDown = 0; // number of seconds remaining
    $scope.show_proc = false;
    var stop;

    $scope.loading_progress  = function(){
      // set number of seconds until the pizza is ready
      $scope.loadingUp = 0;

      // start the countDown
      stop = $interval(function() {

      	$scope.loadingUp++;
        
        if ($scope.loadingUp <= 25) {
	        
	        var style = $scope.loadingUp * 4 + "%";

	        $scope.loading_pos_style = {
		      'width': style
		    };
		}

		if($scope.loadingUp == 25) {
			$scope.show_proc = true;
		}
        // stop $interval
        if ($scope.loadingUp === 28){
          $interval.cancel(stop);
          $state.go('start');
        }
      }, 300, 0); // invoke every 1 second
    };

/*
	$scope.$on('$ionicView.enter', function(){

	});
*/
});
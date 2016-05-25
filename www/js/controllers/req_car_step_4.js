angular.module('req_car_step_4.controllers', [])

.controller('reqCarStep_4_Ctrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval) {

    $scope.goBack = function() {
      $ionicHistory.goBack();
    };

    $scope.data = [{desc:""}];

    $scope.goSave = function() {
        console.log($scope.data);
        $state.go("req-car-step-5");
    };

});
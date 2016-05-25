angular.module('req_car_step_5.controllers', [])

.controller('reqCarStep_5_Ctrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval) {

    $scope.goBack = function() {
      $ionicHistory.goBack();
    };

    $scope.data = [{desc:""}];

    $scope.goSave = function() {
        console.log($scope.data);
        $state.go("req-6-tab.camera");
    };

});
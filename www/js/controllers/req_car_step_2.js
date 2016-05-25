angular.module('req_car_step_2.controllers', [])

.controller('reqCarStep_2_Ctrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval) {

    $scope.goBack = function() {
      $ionicHistory.goBack();
    };

    $scope.open = true;
    $scope.car_step_2 = 11500;

    $scope.openChange = function(open) {
        $scope.open = open;
    };

    $scope.budgetChange = function(budget) {
        $scope.car_step_2 = budget;
    };

    $scope.goSave = function() {
        console.log($scope.car_step_2);
        $state.go("req-car-step-3");
    };

});
angular.module('req_car_step_3.controllers', [])

.controller('reqCarStep_3_Ctrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval) {

    $scope.goBack = function() {
      $ionicHistory.goBack();
    };

    $scope.car_step_3 = [
        { text: "I'M FLEXIBLE", checked: false },
        { text: "AS SOON AS POSSIBLE", checked: false },
        { text: "URGET", checked: true },
        { text: "WEEKEND ONLY", checked: true },
        { text: "SPECIFIC DATES", checked: false }
    ];

    $scope.fromDate = "";
    $scope.endDate = "";

    $scope.goSave = function() {
        // alert($scope.fromDate);
        $state.go("req-car-step-4");
    };

});
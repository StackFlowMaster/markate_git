angular.module('req_car_step_1.controllers', [])

.controller('reqCarStep_1_Ctrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval) {

    $scope.goBack = function() {
      $state.go("req-tab.myhome");
    };

    $scope.car_step_1 = [
        { text: "BATHROOMS", checked: false },
        { text: "COMMERCIAL REPAIR", checked: false },
        { text: "HOME OFFICES", checked: true },
        { text: "INSTALL COUNTERTOP", checked: true },
        { text: "MINI-BARS", checked: false }
    ];

    $scope.goSave = function() {
        $state.go("req-car-step-2");
    };

});
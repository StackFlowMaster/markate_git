angular.module('deal_detail.controllers', [])

.controller('deal_detail_Ctrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval, $stateParams) {

    $scope.deal_id = $stateParams.id;

    $scope.goBack = function() {
      $ionicHistory.goBack();
    };

    $scope.goHideMe = function() {
      $state.go("deal-hide");
    };

});
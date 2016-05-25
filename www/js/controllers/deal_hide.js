angular.module('deal_hide.controllers', [])

.controller('deal_hide_Ctrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval, $stateParams) {

    $scope.deal_id = $stateParams.id;

    $scope.goBack = function() {
      $ionicHistory.goBack();
    };

    $scope.goHideMe = function() {
      // $state.go("deal-list");
      $state.go("search-detail");
    };

});
angular.module('search_invite.controllers', [])

.controller('search_invite_Ctrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval, $stateParams) {

    $scope.job_lists = [
        { text: "JOB NAME 1", checked: true },
        { text: "JOB NAME 2", checked: false },
        { text: "JOB NAME 3", checked: false }
    ];

    $scope.goBack = function() {
      $ionicHistory.goBack();
    };

    $scope.goInvite = function() {
        $state.go("search-proc");
    };

});
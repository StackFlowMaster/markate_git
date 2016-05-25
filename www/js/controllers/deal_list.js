angular.module('deal_list.controllers', [])

.controller('deal_list_Ctrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval) {

    $scope.goBack = function() {
      $state.go("app.home");
    };

    $scope.filter = {
        location : true,
        sort : true
    };

    $scope.search_deals = [
        {
            pro_name:"Alie Heng",
            job_title:"Roof Repair",
            pro_url:"http://www.placeimg.com/100/100/people/0",
            job_url:"http://www.placeimg.com/400/400/any/0",
            duration : 16,
            value: 2250.00,
            save: 1050.00,
            price : 1200.00
        },
        {
            pro_name:"Leona Charles",
            job_title:"Waterpipe install",
            pro_url:"http://www.placeimg.com/100/100/people/1",
            job_url:"http://www.placeimg.com/400/400/any/1",
            duration : 8,
            value: 1860.00,
            save: 950.00,
            price : 600.00
        },
        {
            pro_name:"Matthew",
            job_title:"Window cleaning",
            pro_url:"http://www.placeimg.com/100/100/people/2",
            job_url:"http://www.placeimg.com/400/400/any/2",
            duration : 25,
            value: 900.00,
            save: 300.00,
            price : 650.00
        }
    ];


});
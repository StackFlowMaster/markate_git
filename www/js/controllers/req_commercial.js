angular.module('req_commercial.controllers', [])

.controller('reqCommercialCtrl', function(BACKEND_API, HEADERS, $rootScope, $state, $filter, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval) {

    $scope.goBack = function() {
      $state.go("app.home");
    };

    $scope.search = "";

    $scope.search_lists = [
      {
        "id" : 1,
        "service" : "AC & REFRIGERATOR",
        "image" : "img/r_home_1.png"
      },
      {
        "id" : 2,
        "service" : "CARPENTRY - ROUGH",
        "image" : "img/r_home_2.png"
      },
      {
        "id" : 3,
        "service" : "ARCHITECT - ENGINEER",
        "image" : "img/r_home_3.png"
      },
      {
        "id" : 4,
        "service" : "CLEANING",
        "image" : "img/r_home_4.png"
      },
      {
        "id" : 5,
        "service" : "HANDYMAN",
        "image" : "img/r_home_5.png"
      },
      {
        "id" : 6,
        "service" : "AC & REFRIGERATOR",
        "image" : "img/r_home_1.png"
      },
      {
        "id" : 7,
        "service" : "CARPENTRY - ROUGH",
        "image" : "img/r_home_2.png"
      },
      {
        "id" : 8,
        "service" : "ARCHITECT - ENGINEER",
        "image" : "img/r_home_3.png"
      },
      {
        "id" : 9,
        "service" : "CLEANING",
        "image" : "img/r_home_4.png"
      },
      {
        "id" : 10,
        "service" : "HANDYMAN",
        "image" : "img/r_home_5.png"
      },
      {
        "id" : 11,
        "service" : "AC & REFRIGERATOR",
        "image" : "img/r_home_1.png"
      },
      {
        "id" : 12,
        "service" : "CARPENTRY - ROUGH",
        "image" : "img/r_home_2.png"
      },
      {
        "id" : 13,
        "service" : "ARCHITECT - ENGINEER",
        "image" : "img/r_home_3.png"
      },
      {
        "id" : 14,
        "service" : "CLEANING",
        "image" : "img/r_home_4.png"
      },
      {
        "id" : 15,
        "service" : "HANDYMAN",
        "image" : "img/r_home_5.png"
      }
    ];

})

.filter('searchServices', function(){
  return function (items, query) {
    var filtered = [];
    var letterMatch = new RegExp(query, 'i');
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (query) {
        if (letterMatch.test(item.service.substring(0, query.length))) {
          filtered.push(item);
        }
      } else {
        filtered.push(item);
      }
    }
    return filtered;
  };
});

angular.module('search_detail.controllers', [])

.controller('search_detail_Ctrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval, $stateParams) {

    $scope.pros_id = $stateParams.id;

    $scope.bMoreInfo = false;

    $scope.goBack = function() {
      $ionicHistory.goBack();
    };

    $scope.pros = {
        name:"Alie Heng",
        url:"http://www.placeimg.com/100/100/people/0",
        bk_url:"http://www.placeimg.com/800/600/any/0",
        checked : false,
        rating: 4
    };

    $scope.reviews = [
        {
            name:"Alie Heng",
            review:"We have captured thousands of screenshots from multiple platforms. ",
            rating: 4
        },
        {
            name:"Matthew",
            review:"We have captured thousands of screenshots from multiple platforms, curated hundreds of articles and provide them to you for free on our website. Our focus is to keep improving our website—and that’s where you can help us.",
            rating: 5
        },
        {
            name:"Rose",
            review:"We have captured thousands of screenshots from multiple platforms, curated hundreds of articles and provide them to you for free on our website. Our focus is to keep improving our website—and that’s where you can help us. ",
            rating: 5
        },
        {
            name:"leona",
            review:"We have captured thousands of screenshots from multiple platforms, curated hundreds of articles and provide them to you for free on our website. Our focus is to keep improving our website—and that’s where you can help us. ",
            rating: 4
        }
    ];

    $scope.goMoreInfo = function() {
        if($scope.bMoreInfo) {
            $scope.bMoreInfo = false;
        } else {
            $scope.bMoreInfo = true;
        }
    }

    $scope.ratingsObject = {
        iconOn : 'ion-ios-star',
        iconOff : 'ion-ios-star-outline',
        iconOnColor: '#2bde73',
        iconOffColor: '#bbbbbb',
        rating:  2,
        minRating:1,
        callback: function(rating) {
          $scope.ratingsCallback(rating);
        }
    };

    $scope.ratingsCallback = function(rating) {
        console.log('Selected rating is : ', rating);
    };

    $scope.goInvite = function() {
        if($scope.pros.checked) {
            $state.go("search-invite");
        }
    };

});
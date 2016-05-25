angular.module('track_job_detail.controllers', [])

.controller('track_job_detail_Ctrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval) {

    $scope.goBack = function() {
      $state.go("track-tabs.job");
    };

    $scope.goComplete = function() {
    	$state.go("track-tabs.request");
    };

    $scope.goHalt = function() {
    	$state.go("track-tabs.job");
    };

    $scope.cur_lat = 52.536846502196774; // 52.504860; // 52.536846502196774; // 52.509314; // 52.514750;
    $scope.cur_lng = 13.24377219080925; // 13.281430; // 13.24377219080925; // 13.399919; // 13.389072;

    custom_map($scope.cur_lat, $scope.cur_lng);

    function custom_map(lat, lng) {

        var latLng = new google.maps.LatLng(lat, lng);

        var mapOptions = {
            center: latLng,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true
        };

        $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var iconBase = 'img/pin.png';

        var baseIcon = new google.maps.MarkerImage(
              iconBase,
              new google.maps.Size(40, 40),
              new google.maps.Point(0, 0),
              null,
              new google.maps.Size(40, 40)
        );

        //Wait until the map is loaded
        google.maps.event.addListenerOnce($scope.map, 'idle', function() {
         
          var marker = new google.maps.Marker({
              map: $scope.map,
              animation: google.maps.Animation.DROP,
              position: latLng,
              label: "A",
              labelClass: "zzzzz",
              icon: baseIcon,
              draggable: false
          });
        /*
          var infoWindow = new google.maps.InfoWindow({
              content: '<p id="hook">You are here!</p>'
          });
        */
          google.maps.event.addListener(marker, 'click', function () {
              // infoWindow.open($scope.map, marker);
          });
         
        });
    };


});
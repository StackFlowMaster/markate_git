angular.module('search_proc.controllers', [])

.controller('search_proc_Ctrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval, $ionicModal) {

    $scope.goBack = function() {
      $state.go("app.home");
    };

    $scope.search_pros = [
        {
            name:"Alie Heng",
            url:"http://www.placeimg.com/100/100/people/0",
            checked : true,
            rating: 4
        },
        {
            name:"Leona Charles",
            url:"http://www.placeimg.com/100/100/people/1",
            checked : false,
            rating: 3
        },
        {
            name:"Alie Heng",
            url:"http://www.placeimg.com/100/100/people/2",
            checked : false,
            rating: 4
        }
    ];

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

    $scope.goExpand = function() {
        $scope.openMapModal();
    };

    $ionicModal.fromTemplateUrl('templates/map.html', {
      scope: $scope,
      animation: 'slide-in-right'
    }).then(function(modal) {
      $scope.map_modal = modal;
    });

    $scope.goPopBack = function () {
        $scope.map_modal.hide();
        $ionicHistory.goBack();
    }

    $scope.openMapModal = function(){
        $scope.map_modal.show();
        custom_map($scope.cur_lat, $scope.cur_lng);
    };

    $scope.closeMapModal = function(){
        $scope.map_modal.hide();
    };

    $scope.goClose = function() {
        $scope.closeMapModal();
    };

    $scope.cur_lat = 52.536846502196774; // 52.504860; // 52.536846502196774; // 52.509314; // 52.514750;
    $scope.cur_lng = 13.24377219080925; // 13.281430; // 13.24377219080925; // 13.399919; // 13.389072;

    $scope.jams =[
        {"id":"138095624","street":"A100","directionLong":"","city":"Berlin","lat":"52.518600","lng":"13.283200","source":"VWD","delay":0,"length":"","reason":"A100, Stadtring Berlin: Wedding Richtung Wilmersdorf, Zwischen AS Spandauer Damm und AS Kurfürstendamm(Schwarzbacher Straße) 3 km stockender Verkehr","detour":0,"detourURL":"","autobahnView":0},
        {"id":"138095608","street":"A111","directionLong":"","city":"Berlin","lat":"52.539600","lng":"13.295100","source":"VWD","delay":0,"length":"","reason":"A111, Autobahnzubringer Hamburg: Charlottenburg Richtung Dreieck Oranienburg, Zwischen AS Heckerdamm und AS Am Festplatz 1 km stockender Verkehr","detour":0,"detourURL":"","autobahnView":0},
        {"id":"138095601","street":"A111","directionLong":"","city":"Berlin","lat":"52.545200","lng":"13.298300","source":"VWD","delay":0,"length":"","reason":"A111, Autobahnzubringer Hamburg: Dreieck Oranienburg Richtung Charlottenburg, Zwischen AS Flughafen Tegel und AS Heckerdamm 1 km stockender Verkehr","detour":0,"detourURL":"","autobahnView":0},
        {"id":"138095616","street":"A111","directionLong":"","city":"Berlin","lat":"52.545200","lng":"13.298300","source":"VWD","delay":0,"length":"","reason":"A111, Autobahnzubringer Hamburg: Charlottenburg Richtung Dreieck Oranienburg, Zwischen AS Flughafen Tegel und AS Saatwinkler Damm 1 km stockender Verkehr","detour":0,"detourURL":"","autobahnView":0},
        {"id":"138095619","street":"A100","directionLong":"","city":"Berlin","lat":"52.502300","lng":"13.280500","source":"VWD","delay":0,"length":"","reason":"A100, Stadtring Berlin: Wilmersdorf Richtung Wedding, Zwischen AS Messedamm und AS Kaiserdamm 1 km Stau","detour":0,"detourURL":"","autobahnView":0},
        {"id":"138095572","street":"A100","directionLong":"","city":"Berlin","lat":"52.494297","lng":"13.287088","source":"EM","delay":0,"length":"","reason":"","detour":0,"detourURL":"","autobahnView":0},
        {"id":"138095604","street":"A100","directionLong":"","city":"Berlin","lat":"52.538250","lng":"13.326150","source":"VWD","delay":0,"length":"","reason":"A100, Stadtring Berlin: Wilmersdorf Richtung Wedding, Zwischen AS Beusselstraße und AS Seestraße 1 km Stau","detour":0,"detourURL":"","autobahnView":0},
        {"id":"138095613","street":"A100","directionLong":"","city":"Berlin","lat":"52.493999","lng":"13.290350","source":"VWD","delay":0,"length":"","reason":"A100, Stadtring Berlin: Wilmersdorf Richtung Wedding, Zwischen AS Kurfürstendamm(Schwarzbacher Straße) und AS Kaiserdamm 2 km stockender Verkehr","detour":0,"detourURL":"","autobahnView":0},
        {"id":"138095612","street":"A100","directionLong":"","city":"Berlin","lat":"52.493999","lng":"13.290350","source":"VWD","delay":0,"length":"","reason":"A100, Stadtring Berlin: Wilmersdorf Richtung Wedding, Zwischen AS Kurfürstendamm(Schwarzbacher Straße) und AS Halenseestraße 1 km stockender Verkehr","detour":0,"detourURL":"","autobahnView":0},
        {"id":"138095577","street":"A100","directionLong":"","city":"Berlin","lat":"52.492111","lng":"13.294030","source":"EM","delay":4,"length":"1.0","reason":"","detour":0,"detourURL":"","autobahnView":0},
        {"id":"138095621","street":"A100","directionLong":"","city":"Berlin","lat":"52.487801","lng":"13.300300","source":"VWD","delay":0,"length":"","reason":"A100, Stadtring Berlin: Wilmersdorf Richtung Wedding, Zwischen AS Hohenzollerndamm und AS Halenseestraße 1 km Stau","detour":0,"detourURL":"","autobahnView":0},
        {"id":"138095611","street":"A100","directionLong":"","city":"Berlin","lat":"52.482948","lng":"13.306800","source":"VWD","delay":0,"length":"","reason":"A100, Stadtring Berlin: Wilmersdorf Richtung Neukölln, Zwischen AS Schmargendorf und AS Alboinstraße 4 km Stau","detour":0,"detourURL":"","autobahnView":0},
        {"id":"138095603","street":"A100","directionLong":"","city":"Berlin","lat":"52.478451","lng":"13.344050","source":"VWD","delay":0,"length":"","reason":"A100, Stadtring Berlin: Neukölln Richtung Wedding, Zwischen AS Innsbrucker Platz und AS Hohenzollerndamm 2 km Stau","detour":0,"detourURL":"","autobahnView":0},
        {"id":"138095610","street":"A100","directionLong":"","city":"Berlin","lat":"52.478451","lng":"13.344050","source":"VWD","delay":0,"length":"","reason":"A100, Stadtring Berlin: Neukölln Richtung Wedding, Zwischen AS Innsbrucker Platz und AS Kurfürstendamm(Schwarzbacher Straße) 4 km Stau","detour":0,"detourURL":"","autobahnView":0},
        {"id":"138095564","street":"Tempelhofer Damm","directionLong":"","city":"Berlin","lat":"52.482655","lng":"13.385673","source":"EM","delay":0,"length":"","reason":"","detour":0,"detourURL":"","autobahnView":0},
        {"id":"138095615","street":"A100","directionLong":"","city":"Berlin","lat":"52.469799","lng":"13.372200","source":"VWD","delay":0,"length":"","reason":"A100, Stadtring Berlin: Wilmersdorf Richtung Neukölln, Zwischen AS Alboinstraße und AS Oberlandstraße 1 km stockender Verkehr","detour":0,"detourURL":"","autobahnView":0},
        {"id":"138095607","street":"A10","directionLong":"","city":"Landkreis Teltow-Fläming","lat":"52.307652","lng":"13.450000","source":"VWD","delay":0,"length":"","reason":"A10, Südlicher Berliner Ring: Dreieck Potsdam Richtung Dreieck Spreeau, Zwischen AS Rangsdorf und Schönefelder Kreuz Unfallstelle geräumt","detour":0,"detourURL":"","autobahnView":0},
        {"id":"138095643","street":"L473","directionLong":"","city":"Braunschweig","lat":"52.253300","lng":"10.494800","source":"VWD","delay":0,"length":"","reason":"Stadtgebiet Braunschweig, Münchenstraße, AS BS-Weststadt Fahrbahn auf einen Fahrstreifen verengt, Baustelle, Staugefahr in Richtung BS-Weststadt bis 15.05.2016 15:00 Uhr","detour":0,"detourURL":"","autobahnView":0},
        {"id":"138095641","street":"A395","directionLong":"","city":"Goslar","lat":"51.986198","lng":"10.556300","source":"VWD","delay":0,"length":"","reason":"A395, Wolfenbüttel - Bad Harzburg, AS Lengde in beiden Richtungen Anschlussstelle gesperrt, Dauerbaustelle bis 18.06.2016, eine Umleitung ist eingerichtet","detour":0,"detourURL":"","autobahnView":0},
        {"id":"138095618","street":"B85","directionLong":"","city":"Kelbra (Kyffhäuser)","lat":"51.435749","lng":"11.043300","source":"VWD","delay":0,"length":"","reason":"B85, Berga Richtung Weimar, Zwischen Kelbra und Kreuzung Bad Frankenhausen Verkehrsbehinderung durch Ölspur, fahren Sie bitte besonders vorsichtig, ab Landesgrenze Thüringen Rtg. Bad Frankenhausen","detour":0,"detourURL":"","autobahnView":0}
    ];

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
        
        /*  http://stackoverflow.com/questions/32467212/google-maps-marker-label-with-multiple-characters */
        /*  https://code.google.com/p/google-maps-utility-library-v3/wiki/Libraries#MarkerWithLabel */

        var iconJam = 'img/pin.png';

        var pinIcon = new google.maps.MarkerImage(
            iconJam,
            null,
            null,
            null,
            new google.maps.Size(40, 35)
        );
    
        var infowindow = [];

        for (var i = 0; i < $scope.jams.length; i++) {
            var item = $scope.jams[i];

            var pos = new google.maps.LatLng(item.lat, item.lng);
            console.log(i.toString());
            marker = new google.maps.Marker({
                map: $scope.map,
                animation: google.maps.Animation.DROP,
                position: pos,
                label: "P",
                icon: pinIcon,
                draggable: false
            });
            /*
            infowindow[i] = new google.maps.InfoWindow({
                content: '<img class="jam_img" src="img/pin.png" width="25" height="25" />' +
                         '<label class="jam_delay" >Pros Item</label>'
            });
            */
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    // infowindow[i].open($scope.map, marker);
                }
            })(marker, i));
            
        };
        
    };


});
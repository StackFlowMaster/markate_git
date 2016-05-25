angular.module('loginex.controllers', [])

.controller('loginExCtrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval, UserService) {

    $scope.msg = "";

	$scope.user = {
		username : "3100123456", // 3100123456
		password : "appleseat" // appleseat
	};

    $scope.goBack = function() {
    	$state.go("login");
    };

    $scope.goLogIn = function() {
        console.log($scope.user);
        $state.go("app.home");
        /*
        if (!$scope.user.username) {

          $scope.msg = "Enter a valid email address OR a valid phone number!";

        } else if (!$scope.user.password) {

          $scope.msg =  "Please enter your Password!";

        } else {

            $ionicLoading.show({
                template: 'Markate Login ...'
            });

            var params = {
                username    : $scope.user.username,
                password    : $scope.user.password
            };

            $http({
                method: 'POST',
                url: BACKEND_API + '/login',
                data : toparams(params),
                headers: HEADERS
            })
            .success( function( resp ) {
                $ionicLoading.hide();
                
                if(resp.status == 'success') {
                    var result = resp.response;
                    
                    UserService.setUser(result);

                    $state.go("app.home");
                }                
            })
            .error(function(err) {
                $ionicLoading.hide();

                var error = err.message;

                if(error.username) {
                    console.log("Err:", error.password.length);
                    $scope.msg = error.username;
                } else if(error.password) {
                    $scope.msg = error.password;
                }
                // console.log('Failure - Login API');
                // alert("Network Connection Error");
            });
        }
        */
    };
});
















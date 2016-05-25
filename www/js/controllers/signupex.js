angular.module('signupex.controllers', [])

.controller('signupExCtrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval, REGX, UserService) {

	$scope.msg = "";

	$scope.user = {
		name : "james", // james
		email : "james@markate.com", // james@markate.com
		phone : "0987654321", // 0987654321
		zipcode : "85001", // 85001
		password : "12345678", // 12345678
		repassword : "12345678" // 12345678
	};

    $scope.goBack = function() {
      $state.go("login");
    };

/*
	http://stg.markate.com/

	Basic Auth :
	username : markate
	password : theriim
	----------------------------
    name : alie
    email : alie.hengeveld@hotmail.com
    phone : 3100123456
    zipcode : 85001
    password : appleseat
*/

	$scope.goSignUp = function() {

        $scope.msg = "";

        if (!$scope.user.name) {

          $scope.msg = "Please enter your business name!";

        } else if (!$scope.user.zipcode) {

          $scope.msg = "Please enter Zip Code where you need service!";

        } else if (!$scope.user.email) {

          $scope.msg = "Please enter your Email Address!";

        } else if (!REGX.validEmail($scope.user.email)) {

          $scope.msg = "Please enter valid Email Address!";

        } else if (!$scope.user.password) {

          $scope.msg =  "Please enter your Password!";

        } else if ($scope.user.password.length < 8) {

          $scope.msg =  "Password length must be bigger then 8 characters!";

        } else if ($scope.user.password.indexOf(' ') !=  -1) {

          $scope.msg =  "Password can not contain spaces!";

        } else if (!$scope.user.repassword.length) {

          $scope.msg =  "Please enter Confirm Password!";

        } else if ($scope.user.repassword != $scope.user.password) {

          $scope.msg =  "Password and Confirm Password doesn't match!";

        } else {

            $ionicLoading.show({
                template: 'Markate Register ...'
            });

            var params = {
				username	: $scope.user.name,
				email 		: $scope.user.email,
				phone 		: $scope.user.phone,
				zipcode 	: $scope.user.zipcode,
				password 	: $scope.user.password
            };

            $http({
                method: 'PUT',
                url: BACKEND_API + '/register',
                data : toparams(params),
                headers: HEADERS
            })
            .success( function( resp ) {
            	$ionicLoading.hide();

            	console.log(resp);
            	
                if(resp.status == 'success') {
                    var result = resp.response.user_data;

                    /*
			        window.localStorage.setItem('id', result.last_insert_id);
			        window.localStorage.setItem('activation_key', result.activation_key);
			        window.localStorage.setItem('username', $scope.user.name);
			        window.localStorage.setItem('email', $scope.user.email);
			        window.localStorage.setItem('phone', $scope.user.phone);
			        window.localStorage.setItem('zipcode', $scope.user.zipcode);
			        window.localStorage.setItem('password', $scope.user.password);
					*/
			        $state.go("loginex");

                }
            })
            .error(function(err) {
            	$ionicLoading.hide();

                var error = err.message;

                if(error.username) {
                	$scope.msg = error.username;
                } else if(error.email) {
                	$scope.msg = error.email;
                } else if(error.zipcode) {
                	$scope.msg = error.zipcode;
                } else if(error.phone) {
                	$scope.msg = error.phone;
                } else if(error.password) {
                	$scope.msg = error.password;
                }

                // console.log('Failure - Signup API');
                // alert("Network Connection Error");
            });
        }
	}
});





















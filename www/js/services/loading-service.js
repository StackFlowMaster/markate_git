angular.module('markate')
.service('loadingService', function ($q, $http, BACKEND_API, HEADERS, $window) {
	var self = this;

	return {

		getJams: function (lat, lng) {
/*
			var data = toparams({
				lat : lat,
				lng : lng
			});

			var defer = $q.defer();

		    var req = {
		    	method: 'POST',
		    	url: BACKEND_API + '/api/v1/trafficjam/' + '?lat=' + lat + '&lng=' + lng,
		    	headers: HEADERS
		    };

		    $http(req).
		    success(function(data, status, headers, config) {
	    		defer.resolve(adjustment_self(data));
		    }).
		    error(function(data, status, headers, config) {
		    	defer.reject('An error occured while communicating to the server.');
		    });

			return defer.promise;
*/
		}
	};
});
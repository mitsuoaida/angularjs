var app = angular.module('app',[]);
app.factory('googleService', ['$http', function($http) {
  var gService = {};
  gService.search = function(keyword) {
    return $http.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyBEfO-NT-nz9D7vOgzBasTfaUZGl0VOzV8&cx=012541465954898638347:cceu-bwi7pc&q='+keyword+'&alt=json')
    .success(function success(data, status, headers, config){
      return data;
    })
    .error(function error(data, status, headers, config){
      alert("connect error");
    });
  };
  return gService;
}]);

app.controller('GoogleController', ['$scope', 'googleService', function($scope, googleService){
    $scope.search = function() {
      googleService.search($scope.keyword)
      .then(function success(result){
        $scope.message = result;
      });
    };
    $scope.handleKeydown = function(e) {
	  if (e.which === 13) {
      $scope.message = googleService.search($scope.keyword);
	  }
	};
  }]);
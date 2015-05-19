var app = angular.module('app',[]);
app.factory('googleService', ['$http', GoogleService])
.controller('GoogleController', ['$scope', 'googleService', GoogleController]);

function GoogleService($http) {
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
}

function GoogleController($scope, googleService) {
  $scope.search = function() {
    displayGoogleSearchResult($scope, googleService);
  };
  $scope.handleKeydown = function(e) {
    if (e.which === 13) {
      displayGoogleSearchResult($scope, googleService);
    }
  };
}

function displayGoogleSearchResult($scope, googleService) {
  googleService.search($scope.keyword)
  .then(function success(result){
    $scope.message = result;
  });
}

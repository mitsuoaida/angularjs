var app = angular.module('app',[]);
app.service('googleService', function() {
  this.searchResult = function(keyword) {
    return keyword;
  };
});


app.controller('GoogleController', ['$scope', 'googleService', function($scope, googleService){
    $scope.search = function() {
      $scope.message = googleService.searchResult($scope.keyword);
    };
    $scope.handleKeydown = function(e) {
	  if (e.which === 13) {
      $scope.message = googleService.searchResult($scope.keyword);
	  }
	};
  }]);
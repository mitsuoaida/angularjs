angular.module('app',[])
  .controller('GoogleController', ['$scope', function($scope){
    $scope.search = function() {
      $scope.message = $scope.keyword;
    };
    $scope.handleKeydown = function(e) {
	  if (e.which === 13) {
	    $scope.message = $scope.keyword;
	  }
	};
  }]);
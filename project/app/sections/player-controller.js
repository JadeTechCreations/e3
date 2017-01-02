'use strict';
angular
    .module('app.core')
    .controller('PlayerController', function($scope, PageValues, $http, $routeParams) {
    //Set page title and description
    PageValues.title = "PLAYERS";
    PageValues.description = "A listing of all availble players.";

    var typeParam = '';
    if($routeParams.type !== undefined){
      var typeParam = '/'+$routeParams.type;
      console.log(typeParam);
    }
    $http.get('api/stats'+typeParam).
    success(function(data, status, headers, config) {
      $scope.stats = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});

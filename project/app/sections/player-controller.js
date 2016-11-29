'use strict';
angular
    .module('app.core')
    .controller('PlayerController', function($scope, PageValues) {
    //Set page title and description
    PageValues.title = "PLAYERS";
    PageValues.description = "A listing of all availble players.";
});

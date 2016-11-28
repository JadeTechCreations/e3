'use strict';
angular
    .module('app.core')
    .controller('TeamController', function($scope, PageValues) {
    //Set page title and description
    PageValues.title = "TEAM";
    PageValues.description = "A listing of all teams available.";
});

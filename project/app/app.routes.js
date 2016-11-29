'use strict';

angular
    .module('app.routes', ['ngRoute'])
    .config(config);

function config ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'sections/home/home.html',
            controller: 'HomeController as home'
        })
        .when('/players', {
            templateUrl: 'sections/players/player.html',
            controller: 'PlayerController as player'
        })
        .when('/teams', {
            templateUrl: 'sections/teams/team.html',
            controller: 'TeamController as team'
        })
        .otherwise({
            redirectTo: '/'
        });
}

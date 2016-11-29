'use strict';

require('./app.core');
require('./app.config');
require('./app.routes');
require('./app.services');
require('./modules');

angular.module('app', ['ngRoute',
                        'ngAnimate',
                        'angularMoment',
                        'angular-preload-image',
                        'truncate',
                        'app.routes',
                        'app.core',
                        'app.services',
                        'app.config']);

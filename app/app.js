(function () {

    'use strict';

    angular.module('cityGetApp', [

        // Module dependencies
        'ui.router',

        // Route dependencies
        'cityGetApp.route',

        // All constants
        'cityGetApp.constant',

        // Request routes
        'cityGetApp.routeRequest',

        // Filter dependencies
        'cityGetApp.filters',

        // Directive dependencies
        'cityGetApp.directives',

        // Controller dependencies 
        'cityGetApp.controllers',

        // Service dependencies
        'cityGetApp.city.service'

    ]);

}());
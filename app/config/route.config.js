/**
 * Created by vlad on 22/09/16.
 */
;
(function(){

    'use strict';

    angular.module('cityGetApp.route', [])
        .config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                $stateProvider
                // Main route
                    .state('home', {
                        url: '/',
                        views: {
                            '': {
                                templateUrl: '../views/info.html',
                                controller: 'CityInfoCtrl'
                            }
                        }
                    })
                    .state('weather', {
                        url: '/weather/:zipCode',
                        views: {
                            '': {
                                templateUrl: '../views/weather.html',
                                controller: 'WeatherCityCtrl'
                            }
                        }
                    });

                $urlRouterProvider.otherwise('/');
            }])
}());
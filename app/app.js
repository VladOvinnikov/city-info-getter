(function () {

    'use strict';

    angular.module('cityGetApp', [

        'ui.router',
        
        'cityGetApp.main.controller',
        'cityGetApp.city.service'

    ]).config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $stateProvider
            // Main route
                .state('home', {
                    url: '/',
                    views: {
                        '': {
                            templateUrl: '../views/main.html',
                            controller: 'MainCtrl'
                        }
                    }
                });

            $urlRouterProvider.otherwise('/');
        }]);

}());
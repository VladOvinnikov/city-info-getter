/**
 * Created by vlad on 13/09/16.
 */
;
(function () {

    'use strict';

    angular.module('cityGetApp.app.controller', [])
        .controller('AppCtrl', AppCtrl);

    // inject dependencies to the controller
    AppCtrl.$inject = ['$scope', '$log', 'CityService'];

    function AppCtrl($scope, $log, CityService) {

        // log controller enters
        $log.info('AppCtrl loaded!');

        // Declare all variables in root scope
        $scope.global = {
            error: null,
            cities: null,
            cityInfo: null
        };

        /**
         * Get city list
         */
        CityService.getCities()
            .then(function (res) {
                // pass result to scope variable
                $scope.global.cities = res;
            }, function (error) {
                // if error pass it to the scope variable
                $scope.global.error = error;
            });

    }

}());
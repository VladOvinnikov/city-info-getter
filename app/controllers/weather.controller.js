/**
 * Created by vlad on 22/09/16.
 */
;
(function () {
    'use strict';

    angular.module('cityGetApp.weather.controller', [])
        .controller('WeatherCityCtrl', WeatherCityCtrl);

    // inject dependencies to the controller
    WeatherCityCtrl.$inject = ['$q', '$scope', '$log', 'CityService', '$stateParams'];

    function WeatherCityCtrl($q, $scope, $log, CityService, $stateParams) {
        
        // log controller enters
        $log.info('WeatherCityCtrl loaded!');

        var zipCodeParam = $stateParams.zipCode;
        
        // make request by city's zip
        CityService.getWeather(zipCodeParam)
            .then(function (res) {
                // pass result to the scope variable
                $scope.weather = res.channel.item;
            }, function (error) {
                // if error pass it to the scope variable
                $scope.error = error;
            });
        
    }

}());
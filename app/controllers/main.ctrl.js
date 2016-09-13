/**
 * Created by vlad on 13/09/16.
 */
;
(function () {
    'use strict';

    angular.module('cityGetApp.main.controller', [])
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', '$log', 'CityService'];

    function MainCtrl($scope, $log, CityService) {
        $log.info('MainCtrl loaded!');

        $scope.error = null;

        CityService.getCities()
            .then(function (res) {
                $scope.cities = res;
            }, function (error) {
                $scope.error = error;
            });

        $scope.getInfo = function (city) {
            $scope.error = null;
            if (city) {
                CityService.getInfo(city)
                    .then(function (res) {
                        $scope.cityInfo = res;

                        CityService.getWeather($scope.cityInfo[1].address_components[4].long_name)
                            .then(function (res) {
                                $scope.weather = res.results.channel.item;

                            }, function (error) {
                                $scope.error = error;
                            });


                    }, function (error) {
                        $scope.error = error;
                    });
            } else {
                $scope.error = 'To get city info, You should choose city before!';
            }
        };

    }

}());
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
            city = 'Boston';
            $scope.error = null;
            if (city) {
                CityService.getInfo(city)
                    .then(function (res) {
                        $scope.cityInfo = res;
                    }, function (error) {
                        $scope.error = error;
                    });
            } else {
                $scope.error = 'To get city info, You should choose city before!';
            }
        };

    }

}());
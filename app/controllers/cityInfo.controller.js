/**
 * Created by vlad on 22/09/16.
 */
;
(function () {
    'use strict';

    angular.module('cityGetApp.cityInfo.controller', [])
        .controller('CityInfoCtrl', CityInfoCtrl);

    // inject dependencies to the controller
    CityInfoCtrl.$inject = ['$q', '$scope', '$log', 'CityService'];

    function CityInfoCtrl($q, $scope, $log, CityService) {

        // log controller enters
        $log.info('CityInfoCtrl loaded!');

        /**
         * Get city info
         * @param city
         */
        $scope.getInfo = function (city) {
            // hide error if it was before request
            $scope.global.error = null;

            if (city) {
                // if city has chosen make request to service
                CityService.getInfo(city)
                    .then(function (res) {
                        // pass result to scope variable
                        $scope.global.cityInfo = res;
                        
                    }, function (error) {
                        // if error pass it to the scope variable
                        $scope.global.error = error;
                    });
            } else {
                // if no chosen city pass error message
                $scope.global.error = 'To get city info, You should choose city before!';
            }
        };
        
    }

}());
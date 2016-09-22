/**
 * Created by vlad on 22/09/16.
 */
;
(function () {
    'use strict';

    angular.module('cityGetApp.cityInfo.directive', [])
        .directive('cCityInfo', cCityInfo);

    cCityInfo.$inject = ['$log'];

    function cCityInfo($log) {
        $log.info('cCityInfo loaded!');
        return {
            restrict: 'AE',
            scope: {
                city: '=city'
            },
            templateUrl: 'partials/cityInfo.directive.tpl.html'
        };
    }

}());
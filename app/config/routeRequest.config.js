/**
 * Created by vlad on 22/09/16.
 */
;
(function () {

    'use strict';

    angular.module('cityGetApp.routeRequest', [])
        .constant('REQUEST_URL',
            {
                GET_WEATHER: '/weather',
                GET_CITY_INFO: 'https://maps.googleapis.com/maps/api/geocode/json?address=usa,{0}&language=us&sensor=false'
            }
        );

}());
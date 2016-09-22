/**
 * Created by vlad on 13/09/16.
 */
;
(function () {

    'use strict';

    angular.module('cityGetApp.city.service', [])
        .service('CityService', CityService);

    // inject dependencies to the service
    CityService.$inject = ['$q', '$http', '$log', 'REST_URL', 'REQUEST_URL', '$filter'];

    function CityService($q, $http, $log, REST_URL, REQUEST_URL, $filter) {

        // log service enters
        $log.info('CityService loaded!');

        // Declare all variables
        var deferred = $q.defer(),
            cities = [
                'Houston',
                'Philadelphia',
                'San Diego',
                'San Jose',
                'Austin',
                'Detroit',
                'Washington',
                'Sacramento',
                'Miami'
            ];

        return {
            getInfo: getInfo,
            getCities: getCities,
            getWeather: getWeather
        };

        /**
         * Get city info by its name
         * @param city
         * @returns {*}
         */
        function getInfo(city) {
            return $http.get($filter('cFormat')(REQUEST_URL.GET_CITY_INFO, [city]))
                .then(
                    function (res) {
                        return res.data.results;
                    })
                .finally(
                    function () {
                        $log.info('Request for city info finished at:', new Date());
                    }
                );
        }

        /**
         * Get weather by city zip code
         * @param zipCode
         * @returns {*}
         */
        function getWeather(zipCode) {
            return $http.get(REST_URL + REQUEST_URL.GET_WEATHER, {
                    params: {
                        zip: zipCode
                    }
                })
                .then(
                    function (res) {
                        return res.data;
                    })
                .finally(
                    function () {
                        $log.info('Request for weather info finished at:', new Date());
                    }
                );
        }

        /**
         * Get city list
         * @returns {Function}
         */
        function getCities() {
            deferred.resolve(cities);
            return deferred.promise;
        }

    }

}());
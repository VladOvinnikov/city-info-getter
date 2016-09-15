/**
 * Created by vlad on 13/09/16.
 */
;
(function () {
    'use strict';

    angular.module('cityGetApp.city.service', [])
        .service('CityService', CityService);

    CityService.$inject = ['$q', '$http', '$log'];

    function CityService($q, $http, $log) {

        $log.info('CityService loaded!');

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

        function getInfo(city) {
            return $http.get('http://maps.googleapis.com/maps/api/geocode/json?address=usa,+' + city + '&language=us&sensor=false')
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

        function getWeather(zipCode) {

            //https://thawing-gorge-74042.herokuapp.com
            return $http.get('https://weather-web-server.herokuapp.com/weather',{//http://localhost:3000/weather', {
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

        function getCities() {
            deferred.resolve(cities);
            return deferred.promise;
        }

    }

}());
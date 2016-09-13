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
                'New York',
                'Los Angeles',
                'Chicago',
                'Houston',
                'Philadelphia',
                'Phoenix',
                'San Antonio',
                'San Diego',
                'Dallas',
                'San Jose',
                'Jacksonville',
                'Indianapolis',
                'San Francisco',
                'Austin',
                'Columbus',
                'Fort Worth',
                'Charlotte',
                'Detroit, Michigan',
                'Baltimore',
                'Boston',
                'Seattle',
                'Washington',
                'Denver',
                'Portland',
                'Las Vegas',
                'Albuquerque',
                'Sacramento',
                'Kansas City',
                'Atlanta',
                'Miami',
                'Cleveland'
            ];
        
        return {
            getInfo: getInfo,
            getCities: getCities
        };

        function getInfo(city) {
            //https://github.com/deremer/Cities/blob/master/countries/unitedstates.js
            //http://maps.googleapis.com/maps/api/geocode/json?address=usa,+chicago&language=us&sensor=false
            return $http.get('http://maps.googleapis.com/maps/api/geocode/json?address=usa,+' + city + '&language=us&sensor=false')
                .then(
                    function (res) {
                        return res.data.results;
                        // return response.data.results.map(function(item){
                        //     return item.formatted_address;
                        // });
                    })
                .finally(
                    function () {
                        $log.info('Request City getList finished at:', new Date());
                    }
                );
        }

        function getCities() {
            deferred.resolve(cities);
            return deferred.promise;
        }

    }

}());
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

        var deferred = $q.defer();

        return {
            getInfo: getInfo
        };

        function getInfo(){
            //https://github.com/deremer/Cities/blob/master/countries/unitedstates.js
            //http://maps.googleapis.com/maps/api/geocode/json?address=usa,+chicago&language=us&sensor=false
            $http.get('//maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    address: val,
                    sensor: false
                }
            }).then(function(response){
                return response.data.results.map(function(item){
                    return item.formatted_address;
                });
            });
        }

    }

}());
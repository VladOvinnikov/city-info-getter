/**
 * Created by vlad on 22/09/16.
 */
;
(function () {
    'use strict';

    angular.module('cityGetApp.stringFormat.filter', [])
        .filter('cFormat', cFormat);

    // inject dependencies to the service
    cFormat.$inject = ['$log'];

    function cFormat($log) {

        // log service enters
        $log.info('cFormat loaded!');
    
        // find '{' put argument by position in array
        // uses to insert param inside string request 
        //https://maps.googleapis.com/maps/api/geocode/json?address=usa,{0}&language=us&sensor=false
        //{0} - here will be inserted param
        return function (template, values) {
            for (var i = 0; i < template.length - 1; i++) {
                var reg = new RegExp("\\{" + i + "\\}", "gm");
                template = template.replace(reg, values[i]);
            }
            return template;
        };
    }

}());
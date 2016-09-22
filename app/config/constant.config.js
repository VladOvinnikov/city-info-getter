/**
 * Created by vlad on 22/09/16.
 */
;
(function () {

    'use strict';

    angular.module('cityGetApp.constant', [])
        .constant('REST_URL', restURLParser(window));

    // Parse url for make head of all request
    function restURLParser(window) {

        if (window.location.hostname === 'localhost')
            return 'http://localhost:3011';
        else if (window.location.hostname === 'weather-web-server.herokuapp.com')
            return 'https://weather-web-server.herokuapp.com';
    }

}(window));
/**
 * Created by vlad on 13/09/16.
 */
;
(function () {
    'use strict';

    angular.module('cityGetApp.main.controller', [])
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$q', '$scope', '$log'];

    function MainCtrl($q, $scope, $log) {
        $log.info('MainCtrl loaded!');

    }

}());
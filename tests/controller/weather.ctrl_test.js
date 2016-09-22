/**
 * Created by vlado on 22-Sep-16.
 */
;
(function () {
    'use strict';

    describe('cityGetApp.weather.controller module:', function () {

        beforeEach(function () {

            module('ui.router');
            module('cityGetApp.constant');
            module('cityGetApp.routeRequest');
            module('cityGetApp.controllers');
            module('cityGetApp.city.service');

        });

        describe('WeatherCityCtrl - ', function () {

            var ctrl, scope, rootScope, CityService, q, deferred, weather, stateParams;

            beforeEach(inject(
                function (_$controller_, _$rootScope_, _CityService_, _$q_, _$stateParams_) {

                    rootScope = _$rootScope_;
                    scope = rootScope.$new();
                    CityService = _CityService_;
                    q = _$q_;
                    deferred = q.defer();
                    stateParams = _$stateParams_;

                    stateParams = {zipCode: '98555'};
                    scope.global = {
                        error: null
                    };
                    weather = {
                        channel: {
                            item: '98555'
                        }
                    };

                    spyOn(CityService, 'getWeather').and.returnValue(deferred.promise);

                    ctrl = _$controller_('WeatherCityCtrl', {

                        $rootScope: rootScope,
                        $scope: scope,
                        CityService: CityService

                    });
                }));

            it('WeatherCityCtrl should be initialized', function () {
                expect(ctrl).toBeDefined();
            });

            it('$scope.weather should be defined and NULL', function () {
                expect(scope.weather).toBeDefined();
                expect(scope.weather).toBeNull();
            });

            describe('$scope.global: ', function () {

                it('$scope.global should be defined', function () {
                    expect(scope.global).toBeDefined();
                });

                it('$scope.global.error should be defined and NULL', function () {
                    expect(scope.global.error).toBeDefined();
                    expect(scope.global.error).toBeNull();
                });

            });

            describe('CityService.getWeather(): ', function () {

                it('should to be defined', function () {
                    expect(CityService.getWeather().then).toBeDefined();
                });

                it('should be defined and return products', function () {
                    deferred.resolve(weather);
                    scope.$apply();

                    expect(scope.weather).toEqual(stateParams.zipCode);
                    expect(scope.global.error).toBeNull();
                });

                it('should reject promise', function () {
                    var response = "Error!";

                    deferred.reject(response);
                    scope.$apply();

                    expect(scope.weather).toBeNull();
                    expect(scope.global.error).toEqual(response);
                });

            });

        });
    });

}());

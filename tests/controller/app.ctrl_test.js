;
(function () {
    'use strict';

    describe('cityGetApp.app.controller module:', function () {

        beforeEach(function () {

            module('ui.router');
            module('cityGetApp.constant');
            module('cityGetApp.routeRequest');
            module('cityGetApp.controllers');
            module('cityGetApp.city.service');

        });

        describe('AppCtrl - ', function () {

            var ctrl, scope, rootScope, CityService, q, deferred1, deferred2, cities, cityInfo;

            beforeEach(inject(
                function (_$controller_, _$rootScope_, _CityService_, _$q_) {

                    rootScope = _$rootScope_;
                    scope = rootScope.$new();
                    CityService = _CityService_;
                    q = _$q_;
                    deferred1 = q.defer();
                    deferred2 = q.defer();

                    cities = ['Houston', 'Philadelphia', 'San Diego', 'San Jose', 'Austin', 'Detroit', 'Washington', 'Sacramento', 'Miami'];

                    spyOn(CityService, 'getCities').and.returnValue(deferred1.promise);

                    ctrl = _$controller_('AppCtrl', {

                        $scope: scope,
                        CityService: CityService

                    });
                }));

            it('AppCtrl should be initialized', function () {
                expect(ctrl).toBeDefined();
            });

            describe('$scope.global: ', function () {

                it('$scope.global should be defined', function () {
                    expect(scope.global).toBeDefined();
                });

                it('$scope.global.error should be defined and NULL', function () {
                    expect(scope.global.error).toBeDefined();
                    expect(scope.global.error).toBeNull();
                });

                it('$scope.global.cities should be defined and NULL', function () {
                    expect(scope.global.cities).toBeDefined();
                    expect(scope.global.cities).toBeNull();
                });

                it('$scope.global.cityInfo should be defined and NULL', function () {
                    expect(scope.global.cityInfo).toBeDefined();
                    expect(scope.global.cityInfo).toBeNull();
                });

            });

            describe('CityService.getCities(): ', function () {

                it('should to be defined', function () {
                    expect(CityService.getCities().then).toBeDefined();
                });

                it('should be defined and return products', function () {
                    deferred1.resolve(cities);
                    scope.$apply();

                    expect(scope.global.cities).toEqual(cities);
                    expect(scope.global.error).toBeNull();
                });

                it('should reject promise', function () {
                    var response = "Error!";

                    deferred1.reject(response);
                    scope.$apply();

                    expect(scope.global.cities).toBeNull();
                    expect(scope.global.error).toEqual(response);
                });

            });

        });
    });

}());

/**
 * Created by vlado on 22-Sep-16.
 */
;
(function () {
    'use strict';

    describe('cityGetApp.cityInfo.controller module:', function () {

        beforeEach(function () {

            module('cityGetApp.constant');
            module('cityGetApp.routeRequest');
            module('cityGetApp.controllers');
            module('cityGetApp.city.service');
            module('cityGetApp.filters');

        });

        describe('CityInfoCtrl - ', function () {

            var ctrl, scope, rootScope, CityService, q, deferred, city, cities, cityInfo;

            beforeEach(inject(
                function (_$controller_, _$rootScope_, _CityService_, _$q_) {

                    rootScope = _$rootScope_;
                    scope = rootScope.$new();
                    CityService = _CityService_;
                    q = _$q_;
                    deferred = q.defer();

                    scope.global = {
                        error: null,
                        cityInfo: null
                    };
                    city = 'Krakow';
                    cityInfo = [
                        {test: ''},
                        {
                            address_components: [
                                {long_name: 'Test'},
                                {long_name: 'Test'},
                                {long_name: 'Test'},
                                {long_name: 'Test'},
                                {long_name: '98555'}
                            ]
                        }
                    ];

                    spyOn(CityService, 'getInfo').and.returnValue(deferred.promise);

                    ctrl = _$controller_('CityInfoCtrl', {

                        $rootScope: rootScope,
                        $scope: scope,
                        CityService: CityService

                    });
                }));

            it('CityInfoCtrl should be initialized', function () {
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

                it('$scope.global.cityInfo should be defined and NULL', function () {
                    expect(scope.global.cityInfo).toBeDefined();
                    expect(scope.global.cityInfo).toBeNull();
                });

            });

            describe('$scope.getInfo : ', function () {

                it('should be defined', function () {
                    expect(scope.getInfo).toBeDefined();
                    expect(CityService.getInfo().then).toBeDefined();
                });

                it('should called with valid city=NULL and return error message', function () {
                    scope.getInfo(null);

                    expect(scope.global.error).toEqual('To get city info, You should choose city before!');
                });

                it('should called with city and return cityInfo and weather', function () {
                    scope.getInfo(city);
                    deferred.resolve(cityInfo);
                    scope.$apply();

                    expect(scope.global.error).toBeNull();
                    expect(scope.global.cityInfo).toEqual(cityInfo);
                });

                it('should reject promise', function () {
                    var response = "Error!";

                    scope.getInfo(city);

                    deferred.reject(response);
                    scope.$apply();

                    expect(scope.global.error).toEqual(response);
                    expect(scope.global.cityInfo).toBeNull();
                });

            });
        });
    });

}());

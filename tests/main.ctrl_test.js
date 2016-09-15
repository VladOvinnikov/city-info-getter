(function () {
    'use strict';

    describe('cityGetApp.main.controller module:', function () {

        beforeEach(function () {

            module('cityGetApp.main.controller');
            module('cityGetApp.city.service');

        });

        describe('MainCtrl - ', function () {

            var ctrl, scope, rootScope, CityService, q, deferred1, deferred2, city, cities, httpBackend, timeout, cityInfo, weather;

            beforeEach(inject(
                function (_$controller_, _$rootScope_, _CityService_, _$q_, _$httpBackend_, _$timeout_) {

                    rootScope = _$rootScope_;
                    scope = rootScope.$new();
                    CityService = _CityService_;
                    q = _$q_;
                    deferred1 = q.defer();
                    deferred2 = q.defer();
                    httpBackend = _$httpBackend_;
                    timeout = _$timeout_;

                    cities = ['Houston', 'Philadelphia', 'San Diego', 'San Jose', 'Austin', 'Detroit', 'Washington', 'Sacramento', 'Miami'];
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
                    weather = {
                        channel: {
                            item: '98555'
                        }
                    };
                    httpBackend.whenGET('').respond(200, '');
                    spyOn(CityService, 'getCities').and.returnValue(deferred1.promise);
                    spyOn(CityService, 'getInfo').and.returnValue(deferred1.promise);
                    spyOn(CityService, 'getWeather').and.returnValue(deferred2.promise);

                    ctrl = _$controller_('MainCtrl', {

                        $rootScope: rootScope,
                        $scope: scope,
                        CityService: CityService

                    });
                }));

            it('MainCtrl should be initialized', function () {
                expect(ctrl).toBeDefined();
            });

            it('$scope.error ', function () {
                expect(scope.error).toBeDefined();
                expect(scope.error).toBeNull();
            });

            describe('CityService.getCities(): ', function () {

                it('should to be defined', function () {
                    expect(CityService.getCities().then).toBeDefined();
                });

                it('should be defined and return products', function () {
                    deferred1.resolve(cities);
                    scope.$apply();

                    expect(scope.cities).toEqual(cities);
                    expect(scope.error).toBeNull();
                });

                it('should reject promise', function () {
                    var response = "Error!";

                    deferred1.reject(response);
                    scope.$apply();

                    expect(scope.cities).toBeNull();
                    expect(scope.error).toEqual(response);
                });

            });

            describe('$scope.getInfo : ', function () {

                it('should be defined', function () {
                    expect(scope.getInfo).toBeDefined();
                    expect(CityService.getInfo().then).toBeDefined();
                    expect(CityService.getWeather().then).toBeDefined();
                });

                it('should called with valid city=NULL and return error message', function () {
                    scope.getInfo(null);

                    expect(scope.error).toEqual('To get city info, You should choose city before!');
                });

                it('should called with city and return cityInfo and weather', function () {

                    scope.getInfo(cities);
                    deferred1.resolve(cityInfo);
                    scope.$apply();
                    expect(scope.error).toBeNull();
                    expect(scope.cityInfo).toEqual(cityInfo);

                    deferred2.resolve(weather);
                    scope.$apply();
                    expect(scope.weather ).toEqual(weather.channel.item);


                });

                it('should reject promise', function () {
                    var response = "Error!";

                    scope.getInfo(cities);

                    deferred1.reject(response);
                    scope.$apply();

                    expect(scope.error).toEqual(response);
                    expect(scope.cityInfo).toBeNull();

                    deferred2.reject(response);
                    scope.$apply();
                });

            });

        });
    });

}());

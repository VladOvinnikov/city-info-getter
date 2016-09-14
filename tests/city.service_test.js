/**
 * Created by vlado on 14-Sep-16.
 */
(function () {

    'use strict';

    describe('cityGetApp.city.services module:', function () {

        beforeEach(function () {

            module('cityGetApp.city.service');

        });

        describe('CityService: ', function () {

            var httpBackend, service, result, city, zip;

            beforeEach(inject(function (_$httpBackend_, _CityService_) {

                httpBackend = _$httpBackend_;
                service = _CityService_;
                city = 'Kraków';
                zip = '55852';

            }));

            it('CityService should be defined', function () {
                expect(service).toBeDefined();
            });

            it('getInfo() should return city info', function () {

                httpBackend.expectGET('http://maps.googleapis.com/maps/api/geocode/json?address=usa,+' + city + '&language=us&sensor=false').respond(200, city);

                service.getInfo(city)
                    .then(function (data) {
                        result = data;
                    });

                httpBackend.flush();
            });

            it('getWeather() should return city weather', function () {

                httpBackend.expectGET('http://localhost:3000/weather?zip=' + zip).respond(200, zip);

                service.getWeather(zip)
                    .then(function (data) {
                        result = data;
                    });

                httpBackend.flush();

                expect(result).toEqual(zip);
            });

        });
    });

}());
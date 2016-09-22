/**
 * Created by vlado on 22-Sep-16.
 */
;
(function () {

    'use strict';

    describe('cityGetApp.directives module:', function () {

        beforeEach(function () {

            module('app/partials/cityInfo.directive.tpl.html');
            module('cityGetApp.directives');

        });

        describe('cCityInfo: ', function () {

            var element, compile, rootScope, scope, isolateScope, httpBackend;

            beforeEach(inject(
                function (_$compile_, _$rootScope_, _$httpBackend_) {

                    compile = _$compile_;
                    rootScope = _$rootScope_;
                    scope = rootScope.$new();
                    httpBackend = _$httpBackend_;

                    httpBackend.whenGET('partials/cityInfo.directive.tpl.html').respond(200, 'TEMPLATE');

                    element = '<c-city-info city="city"></c-city-info>';
                    element = compile(element)(scope);
                    scope.$digest();
                    isolateScope = element.isolateScope();

                })
            );

            describe('init variables: ', function () {

                it('scope.city should equal city', function () {
                    // expect(isolateScope.city).toBeDefined();
                    // expect(isolateScope.city).toEqual('');
                });


            });

        });
    });

}());
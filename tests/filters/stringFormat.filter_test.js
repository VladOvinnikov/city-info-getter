/**
 * Created by vlado on 22-Sep-16.
 */
;
(function () {

    'use strict';

    describe('cityGetApp.filters module:', function () {

        beforeEach(function () {

            module('cityGetApp.filters');

        });

        describe('cFormat: ', function () {

            var stringFormatFilter,
                filterResult,
                result = 'Hello New York',
                testedString = 'Hello {0}',
                value = 'New York';

            beforeEach(inject(function ($filter) {

                stringFormatFilter = $filter('cFormat');

            }));

            it('should be defined', function () {
                expect(stringFormatFilter).toBeDefined();
            });

            it('should return string result', function () {
                filterResult = stringFormatFilter(testedString, [value]);

                expect(filterResult).toEqual(result);
            });

        });
    });

}());
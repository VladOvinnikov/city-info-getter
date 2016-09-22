//jshint strict: false
module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            'app/bower_components/angular/angular.min.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/bower_components/angular-ui-router/release/angular-ui-router.min.js',
            'app/controllers/*.js',
            'app/directives/*.js',
            'app/filters/*.js',
            'app/services/*.js',
            'app/config/*.js',
            'app/*.js',
            'tests/**/*.js',
            'app/partials/*.html'
        ],

        reporters: ['progress', 'coverage'],

        preprocessors: {
            'app/partials/*.html': ['ng-html2js'],
            'app/!(bower_components)**/**/*.js': ['coverage']
        },

        coverageReporter: {
            type: 'html',
            dir: 'tests/reports/coverage/'
        },

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        colors: true,

        logLevel: config.LOG_DEBUG,

        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage',
            'karma-ng-html2js-preprocessor',
            'sinon'
        ],

        junitReporter: {
            outputFile: 'tests/unit.xml',
            suite: 'unit'
        },

        singleRun: false

    });
};

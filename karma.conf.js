//jshint strict: false
module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            'app/bower_components/angular/angular.min.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/controllers/*.js',
            'app/directives/*.js',
            'app/filters/*.js',
            'app/services/*.js',
            'app/*.js',
            'tests/**/*.js',
            'app/partials/*.html'
        ],

        reporters: ['progress', 'coverage'],

        preprocessors: {
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
            'sinon'
        ],

        junitReporter: {
            outputFile: 'tests/unit.xml',
            suite: 'unit'
        },

        singleRun: false

    });
};

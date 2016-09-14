//jshint strict: false
module.exports = function (config) {
    config.set({

        basePath: './app',

        files: [
            'bower_components/angular/angular.min.js',
            'controllers/*.js',
            'services/*.js',
            'app.js'
        ],

        reporters: ['progress', 'coverage'],

        preprocessors: {
            '!(bower_components)**/**/*.js': ['coverage']
        },

        coverageReporter: {
            type: 'html',
            dir: 'tests/reports/coverage/'
        },

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        colors: true,

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

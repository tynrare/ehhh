// Karma configuration
// Generated on Wed Nov 06 2019 16:39:02 GMT+0300 (Moscow Standard Time)

const webpack = require('./webpack.config.js')
process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function(config, argv) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      './src/subroutine.test.js',
       { pattern: 'res/**', watched: false, included: false, served: true, nocache: false }
    ],
    
    proxies: {
        '/': '/base/'
    },

    // list of files / patterns to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './src/subroutine.test.js': ['webpack', 'sourcemap'],
    },
    
    webpack: webpack(process.env, config),

    webpackMiddleware: {
      noInfo: true,
    },

    coverageReporter: {
        dir: 'dist/reports/coverage',
        reporters: [
            { type: 'html', subdir: '.' },
            { type: 'text', subdir: '.', file: 'text.txt' },
            { type: 'text-summary', subdir: '.', file: 'text-summary.txt' }
        ]
    },
    
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,
    
    singleRun: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome_no_sandbox'],

    customLaunchers: {
      Chrome_no_sandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-web-security']
      }
    },

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

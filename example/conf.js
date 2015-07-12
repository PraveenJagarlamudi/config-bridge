/**
 * Created by Praveen on 17/10/14.
 */
var path = require('path');
var confbdg = require('config-bridge');
var confext = path.resolve( __dirname ,'./helper-config.js');


exports.config = {
    // The location of the standalone Selenium Server jar file, relative
    // to the location of this config. If no other method of starting Selenium
    // Server is found, this will default to
    // node_modules/protractor/selenium/selenium-server...
    seleniumServerJar: './../node_modules/protractor/selenium/selenium-server-standalone-2.43.1.jar',

    chromeDriver: './../node_modules/protractor/selenium/chromedriver.exe',

    // Spec patterns are relative to the location of this config.
    specs: [
        './../specs/custom_matcher_spec.js'
    ],

    capabilities: confbdg.getCapabilities(confext),
    //capabilities: {browserName:'chrome'},

    // The timeout in milliseconds for each script run on the browser. This should
    // be longer than the maximum time your application needs to stabilize between
    // tasks.
    allScriptsTimeout: 11000,

    // How long to wait for a page to load.
    getPageTimeout: 10000,

    // A callback function called once protractor is ready and available, and
    // before the specs are executed.
    // If multiple capabilities are being run, this will run once per
    // capability.
    // You can specify a file containing code to run by setting onPrepare to
    // the filename string.
    onPrepare: function() {
        // At this point, global variable 'protractor' object will be set up, and
        // globals from the test framework will be available. For example, if you
        // are using Jasmine, you can add a reporter with:
        confbdg.init(confext);
        require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter( __dirname + './../results', true, true));
    },

    // A callback function called once tests are finished.
    onComplete: function() {
        // At this point, tests will be done but global objects will still be
        // available.
    },

    // A callback function called once the tests have finished running and
    // the WebDriver instance has been shut down. It is passed the exit code
    // (0 if the tests passed or 1 if not). This is called once per capability.
    onCleanUp: function(exitCode) {},

    params:{},
    // Options to be passed to minijasminenode.
    //
    // See the full list at https://github.com/juliemr/minijasminenode/tree/jasmine1
    jasmineNodeOpts: {
        // If true, display spec names.
        isVerbose: true,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 30000
    }
};
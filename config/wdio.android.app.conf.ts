const { join } = require('path');
const { config } = require('./wdio.shared.conf');
import * as baseConfig from '../conf/base.config.json';

// ============
// Specs
// ============
config.cucumberOpts.require = ['./tests/steps/**/app*.steps.js'];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        platformName: 'Android',
        'appium:deviceName': baseConfig.androidDeviceName,
        'appium:platformVersion': baseConfig.androidPlatformVersion,
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        'appium:app': join(
            process.cwd(),
            './apps/ticketmaster.v2.1.apk',
        ),
        'appium:noReset': true,
        'appium:fullReset': false,
        'appium:dontStopAppOnReset': true,
        'appium:newCommandTimeout': 60,
    },
];

exports.config = config;
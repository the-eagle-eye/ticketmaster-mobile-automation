var {config} = require('./wdio.conf');
const { join } = require('path');
import * as baseConfig from '../conf/base.config.json';


// Appium capabilities
config.capabilities = [
    {
        platformName: 'iOS',
        noReset: true,
        fullReset: false,
        maxInstances: 1,
        automationName: 'XCUITest',
        deviceName: baseConfig.iOsDeviceName,
        platformVersion: baseConfig.iOsPlatformVersion,
        app: join(
            process.cwd(),
            './apps/ticketmaster.v2.1.ipa',
        ),
    }
];

config.cucumberOpts.tagExpression = '@ticketmasteriOsApp';// pass tag to run tests specific to ios

exports.config = config;

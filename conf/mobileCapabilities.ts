const { join } = require('path');

export const mobileCapabilities = {
    ios: {
        "iphone12": {
            platformName: "ios",
            noReset: true,
            fullReset: false,
            maxInstances: 1,
            automationName: 'XCUITest',
            deviceName: "iPhone 12",
            platformVersion: "14.0",
        },
        "iphone13": {
            platformName: "ios",
            noReset: true,
            fullReset: false,
            maxInstances: 1,
            automationName: 'XCUITest',
            deviceName: "iPhone 13",
            platformVersion: "15.0",
        },
        "iphone14": {
            platformName: "ios",
            noReset: true,
            fullReset: false,
            maxInstances: 1,
            automationName: 'XCUITest',
            deviceName: "iPhone 14",
            platformVersion: "16.0",
        },
    },
    android: {
        "samsungGalaxyS21": {
            platformName: "android",
            'appium:deviceName': "Samsung Galaxy S21",
            'appium:platformVersion': "11.0",
            'appium:orientation': 'PORTRAIT',
            'appium:automationName': 'UiAutomator2',
            'appium:noReset': true,
            'appium:fullReset': false,
            'appium:dontStopAppOnReset': true,
            'appium:newCommandTimeout': 60,
        },
        "samsungGalaxyS22": {
            platformName: "android",
            'appium:deviceName': "Samsung Galaxy S22",
            'appium:platformVersion': "12.0",
            'appium:orientation': 'PORTRAIT',
            'appium:automationName': 'UiAutomator2',
            'appium:noReset': true,
            'appium:fullReset': false,
            'appium:dontStopAppOnReset': true,
            'appium:newCommandTimeout': 60,
        },
        "samsungGalaxyS23": {
            platformName: "android",
            'appium:deviceName': "Samsung Galaxy S23",
            'appium:platformVersion': "13.0",
            'appium:orientation': 'PORTRAIT',
            'appium:automationName': 'UiAutomator2',
            'appium:noReset': true,
            'appium:fullReset': false,
            'appium:dontStopAppOnReset': true,
            'appium:newCommandTimeout': 60,
        }
    }
}
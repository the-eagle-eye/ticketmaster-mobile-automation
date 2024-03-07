import { loginPageActions } from "@ticketmaster/helpers/loginPageActions";
import * as credentials from "../../resources/data/credentials.json"
import { Given, When } from "@wdio/cucumber-framework";

Given('the user has arrived on the app`s Sign In page', function () {
    loginPageActions.launchApp();
});

Given('the user enters a valid email into the Email field', function () {
    loginPageActions.enterEmail(credentials.validUser);
});

Given('the user enters a valid password into the Password field', function () {
    loginPageActions.enterPassword(credentials.validPassword);
});

Given('the user enters an invalid password into the Password field', function () {
    loginPageActions.enterPassword(credentials.invalidPassword);
});

When('the user taps the Sign In button', function () {
    loginPageActions.buttonSignInClick();
});


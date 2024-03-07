import { myAccountPageAssertions } from "@ticketmaster/assertions/myAccountPageAssertions";
import { Then } from "@wdio/cucumber-framework";

Then('the user is successfully signed into the application', function () {
    myAccountPageAssertions.theUserShouldNotSeeTheSignInButtonDisplayed();
    myAccountPageAssertions.theUserShouldSeeTheHeaderDisplayed();
});

Then('the Sign Out button appears on My Account', function () {
    myAccountPageAssertions.theUserShouldSeeTheSignOutButtonDisplayed();
});
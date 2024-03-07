import { loginErrorPageAssertions } from "@ticketmaster/assertions/loginErrorPageAssertions";
import { Then } from "@wdio/cucumber-framework";

Then('the correct error message for invalid password appears', function () {
    loginErrorPageAssertions.theUserShouldSeeAnInvalidErrorForPassword();
});
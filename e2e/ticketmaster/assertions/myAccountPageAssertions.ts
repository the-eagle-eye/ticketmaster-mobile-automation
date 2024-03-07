import { myAccountPageActions } from "@ticketmaster/helpers/myAccountPageActions";

class MyAccountPageAssertions {

    public theUserShouldSeeTheHeaderDisplayed() {
        expect(myAccountPageActions.headerLabelText).toHaveTextContaining('My Account');
    }

    public theUserShouldSeeTheSignOutButtonDisplayed() {
        expect(myAccountPageActions.signOutButtonIsDisplayed).toBeTruthy;
    }

    public theUserShouldNotSeeTheSignOutButtonDisplayed() {
        expect(myAccountPageActions.signInButtonIsNotDisplayed).toBeFalsy;
    }
}

export const myAccountPageAssertions = new MyAccountPageAssertions();

import { BasePage } from "@common/pages/basePage";
import { loginPage } from "@ticketmaster/pages/loginPage";
import { myAccountPage } from "@ticketmaster/pages/myAccountPage";

class MyAccountPageActions extends BasePage {

    public headerLabelText() {
        myAccountPage.headerTextLabel.scrollIntoView();
        this.getElementText(myAccountPage.headerTextLabel);
    }

    public signOutButtonIsDisplayed() {
        return this.isDisplayed(myAccountPage.signOutButton);
    }

    public signInButtonIsNotDisplayed() {
        return this.isDisplayed(loginPage.signInButton);
    }

}

export const myAccountPageActions = new MyAccountPageActions();

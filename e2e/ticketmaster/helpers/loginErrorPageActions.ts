import { BasePage } from "@common/pages/basePage";
import { loginErrorPage } from "@ticketmaster/pages/loginErrorPage";

class LoginErrorPageActions extends BasePage{
    
    public invalidEmailElementText() {
        this.getElementText(loginErrorPage.invalidEmailError);
    }

    public invalidPasswordlElementText() {
        this.getElementText(loginErrorPage.invalidEmailError);
    }
}

export const loginErrorPageActions = new LoginErrorPageActions();

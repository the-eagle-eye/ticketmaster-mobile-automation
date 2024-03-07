import { BasePage } from "@common/pages/basePage";
import { loginPage as page} from "@ticketmaster/pages/loginPage";

class LoginPageActions extends BasePage {
    
    constructor() {
        super();
    }

    public enterEmail(userEmail: string) {
        page.emailTextField.scrollIntoView();
        this.sendKeys(page.emailTextField, userEmail);
    }

    public enterPassword(userPassword: string) {
        page.passwordTextField.scrollIntoView();
        this.sendKeys(page.passwordTextField, userPassword);
    }

    public buttonSignInClick() {
        page.signInButton.scrollIntoView();
        this.click(page.signInButton)
    }
}

export const loginPageActions = new LoginPageActions();

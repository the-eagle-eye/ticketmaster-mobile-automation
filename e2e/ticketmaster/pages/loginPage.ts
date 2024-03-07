import { BasePage } from "@common/pages/basePage";
import * as baseConfig from '../../../conf/base.config.json';
import * as locators from '../resources/locators/loginPageLocators.json';

class LoginPage extends BasePage{
    private emailTextFieldLocator: string = locators.emailTextField[baseConfig.OS];
    private passwordTextFieldLocator: string = locators.passwordTextField[baseConfig.OS];
    private signInButtonLocator: string = locators.signInButton[baseConfig.OS];

    public get emailTextField(){
        this.waitForElementToBeDisplayed(this.emailTextFieldLocator, false)
        return this.getElement(this.emailTextFieldLocator);
    }

    public get passwordTextField(){
        this.waitForElementToBeDisplayed(this.passwordTextFieldLocator, false)
        return this.getElement(this.passwordTextFieldLocator);
    }

    public get signInButton(){
        this.waitForElementToBeDisplayed(this.signInButtonLocator, false)
        return this.getElement(this.signInButtonLocator);
    }

}

export const loginPage = new LoginPage();

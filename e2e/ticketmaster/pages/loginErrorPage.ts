import { BasePage } from "@common/pages/basePage";
import * as baseConfig from '../../../conf/base.config.json';
import * as locators from '../resources/locators/loginPageError.json';

class LoginErrorPage extends BasePage{
    private invalidEmailErrorLocator: string = locators.invalidEmailError[baseConfig.OS];
    private invalidPasswordErrorLocator: string = locators.invalidPasswordError[baseConfig.OS];
    private forgotPasswordButtonLocator: string = locators.forgotPasswordButton[baseConfig.OS];


    public get invalidEmailError(){ 
        return this.getElement(this.invalidEmailErrorLocator);
    }

    public get invalidPasswordError(){ 
        return this.getElement(this.invalidPasswordErrorLocator);
    }

    public get forgotPasswordButton(){ 
        return this.getElement(this.forgotPasswordButtonLocator);
    }
}

export const loginErrorPage = new LoginErrorPage();

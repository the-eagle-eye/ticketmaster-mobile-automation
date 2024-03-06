import { BasePage } from "@common/pages/basePage";
import * as baseConfig from '../../../conf/base.config.json';
import * as locators from '../resources/locators/myAccountPageLocators.json';

class MyAccountPage extends BasePage{
    private signOutButtonLocator: string = locators.signOutButton[baseConfig.OS];
    private headerTextLabelLocator: string = locators.headerTextLabel[baseConfig.OS];


    public get signOutButton(){ 
        return this.getElement(this.signOutButtonLocator);
    }

    public get headerTextLabel(){ 
        return this.getElement(this.headerTextLabelLocator);
    }
}

export const myAccountPage = new MyAccountPage();

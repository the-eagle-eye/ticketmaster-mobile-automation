import * as baseConfig from '../../../conf/base.config.json';

export class BasePage {

    /**
     * This method initialize the app and launch it
     */
    public launchApp() {
        driver.launchApp();
    }

    /**
    * This method return webelement identified by the given locator
    * @param {string} loctor - the locator object with selector technique -> key and locator-> value
    * @return -  WebdriverIO.WebElement
    */
    public getElement(locator: string) {
        return $(locator);
    }

    /**
    * returns boolean
    * @param element - WebdriverIO.WebElement
    *
    */
    public isDisplayed(ele: any) {
        return ele.isDisplayed();
    }
    
    /**
    * This method return list of webelements identified by the given locator
    * @param {Object} loctorObj - the locator object with selector technique -> key and locator-> value
    * @return -  WebdriverIO.WebElement[]- list of webElements
    */
    public getAllElement(locator: string) {
        return $$(locator);
    }

    public waitUntill(condition: () => Promise<boolean>, message: string, waitTime?: number) {
        // set default max wait Time
        let maxWait = baseConfig.defaultWait;
        // override the maxWait Time
        if (waitTime) {
          maxWait = waitTime;
        }
          driver.waitUntil(condition, {
          timeout: maxWait,
          timeoutMsg: message,
          interval: baseConfig.interval_hundred_milisecond
        });
    }

    /**
    * Scroll till element is in visible state
    * @param element any
    * @returns : Scroll till element is in visible state
    */

    public async elementScrollIntoView(element: any) {
        return this.executeScript('arguments[0].scrollIntoView(true)', [element]);
    }

    public async executeScript(script: string, elements?: any[]) {
        return driver.executeScript(script, elements);
    }

    /**
    * click action on the element
    * @param element - WebdriverIO.WebElement
    *
    */
    public click(ele: any, waitTime?: number) {
        let maxWait = baseConfig.defaultWait;
        // override the maxWait Time
        if (waitTime) {
        maxWait = waitTime;
        }
        try {
            this.waitUntill(async () => ele.isDisplayed(), 'element is not displayed', maxWait);
            this.waitUntill(async () => ele.isClickable(), 'element is not clickable', maxWait);
            ele.click();
        } catch (e) {
            this.elementScrollIntoView(ele);
            browser.executeScript('arguments[0].click();', [ele]);
        }
    }

      /**
   * Wait for the given element to become visible
   * @param  {any}   Element
   * @param  {boolean}   falseCase Whether or not to expect a visible or hidden state
   * @param  {number} maxTimeOut optional timeout
   */
  public waitForElementToBeDisplayed(element: any, falseCase: any, maxTimeOut?: number) {
    /**
    * Maximum number of milliseconds to wait for
    * @type {Int}
    */
    let ms = baseConfig.maxWait;

    if(maxTimeOut){
      ms = maxTimeOut;
    }

        element.waitForDisplayed({
        timeout: ms,
        reverse: Boolean(falseCase)
        });
    }

    /**
    * returns boolean
    * @param element - WebdriverIO.WebElement
    *
    */
    public isClickable(ele: any) {
    return ele.isClickable();
    }
    
    /**
    * enter the value in the textbox
    * @param element - WebdriverIO.WebElement
    * @param text -string
    *
    */
    public sendKeys(ele: any, text: string) {
        ele.clearValue();
        return ele.setValue(text);
    }
    
    /**
    * get element text
    * @param ele - any element
    * @return - promise that resolves into element visible text
    */
    public getElementText(element: any, checkTextLengthFlag?: boolean): Promise<string> {
        if (checkTextLengthFlag) {
        this.waitUntill(async () => (element.getText()).length > 0, 'element text length is not greater then 0', baseConfig.defaultWait);
        }
        return (element.getText()).trim().replace(/[\n\r]/g, ' ');
    }
}
import { CommonMethods } from "../pages/common/common.methods";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";
import { Suites } from "../util/suites";

describe(Suites.testSuites.catalogAndPurchases, ()=>{
    it('Navigation by categories', ()=>{

        Logger.stepNumber(1)
        Logger.step('Log in with a registered user')
        Logger.subStep('Navigate to Demoblaze')
        CommonMethods.navigateToDemoBlaze()
        Logger.subStep('Clic on Log In Option')
        CommonMethods.clickOnLogInOption()
        Logger.subStep('Insert a valid username and password')
        LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password);

        Logger.stepNumber(2)
        Logger.step('Navigate to home page')
        CommonMethods.clickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step('Clic on a product category')
        HomeMethods.clickOnMonitorsOption();
        Logger.verification('Check that shows the corresponding products list to the selected category')
        HomeMethods.verifyProductDisplayed('Apple monitor 24')
        HomeMethods.verifyProductDisplayed('ASUS Full HD')
    })
})


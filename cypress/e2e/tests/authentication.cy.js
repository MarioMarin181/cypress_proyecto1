import { CommonMethods } from "../pages/common/common.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginElements } from "../pages/login/login.elements";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";
import { Suites } from "../util/suites";

describe(Suites.testSuites.authentication, ()=>{
    it('Valid Log In', ()=>{
        Logger.stepNumber(1)
        Logger.step('Navigate to the home page')
        CommonMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Clic on Log in Button')
        CommonMethods.clickOnLogInOption();

        Logger.stepNumber(3)
        Logger.step('Insert a valid username and password')
        LoginMethods.insertUsername(LoginData.validCredentials.username)
        LoginMethods.insertPassword(LoginData.validCredentials.password)

        Logger.stepNumber(4)
        Logger.step('Clic on Log In button')
        LoginMethods.clickOnLoginButton()
        Logger.verification('Verificate that the user is redirected to the home page')
        CommonMethods.verifySignedUser(LoginData.validCredentials.username);

    })
})
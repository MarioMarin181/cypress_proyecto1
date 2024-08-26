import { CommonMethods } from "../pages/common/common.methods"
import { HomeElements } from "../pages/home/home.elements";
import { SignupData } from "../pages/signup/signup.data";
import { SignupMethods } from "../pages/signup/signup.methods";
import { Logger } from "../util/logger"
import { Suites } from "../util/suites"

describe(Suites.testSuites.registerAndAuthentication, ()=>{//Suite
    it('Valid user registration', ()=>{

        Logger.stepNumber(1)
        Logger.step('Navigate to the home page')
        CommonMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Click on the Sign up option in the navbar')
        CommonMethods.clickOnSignUpOption();

        Logger.stepNumber(3)
        Logger.step('Complete all the fields with valid information and click on Sign up button for register the user')
        SignupMethods.signup(SignupData.invalidCredentials.username, SignupData.invalidCredentials.password)
        Logger.verification('Verify that the page shows a alert')
        SignupMethods.verifySignupSucessfulMessageIsDesplayed();
    });
}) 


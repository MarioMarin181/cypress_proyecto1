import { Logger } from "../../util/logger";
import { CommonMethods } from "../common/common.methods";
import { SignupElements } from "./signup.elements";

export class SignupMethods{
    static insertUsername(username){
        SignupElements.textboxes.username.invoke('val', username)
    }

    static insertPassword(password){
        SignupElements.textboxes.password.invoke('val', password)
    }

    static clickOnSignupButton(){
        SignupElements.buttons.signup.click();
    }

    static signup(username, password){
        Logger.subStep('Insert username')
        this.insertUsername(username)

        Logger.subStep('Insert password')
        this.insertPassword(password)

        Logger.subStep('Click on Sign up button')
        this.clickOnSignupButton();
    }

    static verifySignupSucessfulMessageIsDesplayed(){
        CommonMethods.verifyAlert('Sign up successful.')
    }
    
}
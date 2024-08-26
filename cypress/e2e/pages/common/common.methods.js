import { CommonData } from "./common.data";
import { CommonElements } from "./common.elements";

export class CommonMethods{
    static navigateToDemoBlaze(){
        cy.clearCookies();
        cy.visit(CommonData.url)
    }

    static clickOnHomeOption(){
        CommonElements.topMenu.home.click()
    }

    static clickOnContactOption(){
        CommonElements.topMenu.contact.click()
    }

    static clickOnAboutUsOption(){
        CommonElements.topMenu.aboutUs.click()
    }

    static clickOnCartOption(){
        CommonElements.topMenu.cart.click()
    }

    static clickOnLogInOption(){
        CommonElements.topMenu.logIn.click()
    }

    static clickOnSignUpOption(){
        CommonElements.topMenu.signUp.click()
    }

    static verifyAlert(expectedMessage){
        cy.on('window:alert',(t)=>{
            expect(t).to.contains(expectedMessage);
        })
    }
}
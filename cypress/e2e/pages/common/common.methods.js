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

    static generateRandomString(length=10){
        let result = ''
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890'
        const charactersLength = characters.length;
        let counter = 0;
        while(counter < length){
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
            counter+=1
        }
        return result;
    }

    static verifySignedUser(username){
        CommonElements.signedUser.should("have.text", `Welcome ${username}`);
    }

}
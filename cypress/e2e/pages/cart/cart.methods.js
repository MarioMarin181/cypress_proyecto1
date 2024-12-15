import { Logger } from "../../util/logger";
import { CommonMethods } from "../common/common.methods";
import { LoginMethods } from "../login/login.methods";
import { CartElements } from "./cart.elements";

export class CartMethods{
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click();
    }

    static verifyProductAdded(productName){
        CartElements.links.delete(productName).should('be.visible');
    }

    static verifyCartPageIsShown(){
        cy.url().should('include', 'cart.html');
    }

    static clickOnPlaceOrderButton(){
        CartElements.buttons.placeOrder.click();
    }

    static deleteProducts(){
        cy.get('a[onclick*="deleteItem"]').each(link=>{
            link.click()
            cy.wait(1000)
        })
    }

    static emptyCart(username, password){
        Logger.subStep('Navigate to demoblaze')
        CommonMethods.navigateToDemoBlaze()
        Logger.subStep('Click on log out')
        CommonMethods.logout()
        Logger.subStep('Click on home option')
        CommonMethods.clickOnHomeOption()
        Logger.subStep('Click on login option')
        CommonMethods.clickOnLogInOption()
        Logger.subStep(`Log in with valid credentials`)
        LoginMethods.login(username, password)
        Logger.subStep('Click on cart option')
        CommonMethods.clickOnCartOption()
        Logger.subStep('Delete the products from the cart')
        this.deleteProducts();
    }
}
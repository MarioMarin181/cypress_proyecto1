import { PurchaseConfirmationElements } from "./purchase-confirmation.elements";

export class PurchaseConfirmationMethods{
    static clickOnOkButton(){
        cy.wait(1000)
        PurchaseConfirmationElements.buttons.ok.click()
    }

    static verifyGreenCheckMarkDisplayed(){
        PurchaseConfirmationElements.icons.greenCheckMark.should('be.visible')
    }
}
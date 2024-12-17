import { CartMethods } from "../pages/cart/cart.methods";
import { CommonMethods } from "../pages/common/common.methods";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { PlaceOrderData } from "../pages/place-order/place-order.data";
import { PlaceOrderMethods } from "../pages/place-order/place-order.methods";
import { ProductDetailsData } from "../pages/product-details/product-details.data";
import { ProductDetailsMethods } from "../pages/product-details/product-details.methods";
import { PurchaseConfirmationMethods } from "../pages/purchase-confirmation/purchase-confirmation.methods";
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
        HomeMethods.verifyProductDisplayed(ProductDetailsData.Monitors.monitor1)
        HomeMethods.verifyProductDisplayed(ProductDetailsData.Monitors.monitor2);

        Logger.postCondition('Log out')
        CommonMethods.logout();
    })

    it('Add product to the shopping car', ()=>{

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
        
        Logger.stepNumber(4)
        Logger.step('Clic on a specific product')
        HomeMethods.clickOnProductLink(ProductDetailsData.Monitors.monitor1)
        Logger.verification('Verify that shows the page product details')
        ProductDetailsMethods.verifyProductDetailsPageDisplayed();

        Logger.stepNumber(5)
        Logger.step('Click on Add to cart button')
        ProductDetailsMethods.clickOnAddToCartButton();

        Logger.stepNumber(6);
        Logger.verification('Verify that a confirmation message is shown and the product is added to the cart')
        ProductDetailsMethods.verifyProductAddedMessage()
        CommonMethods.clickOnCartOption()
        CartMethods.verifyProductAdded(ProductDetailsData.Monitors.monitor1);

        Logger.postCondition('Empty cart and log out')
        CartMethods.emptyCart(LoginData.validCredentials.username, LoginData.validCredentials.password)
        CommonMethods.logout();     
    })

    it('make a purchase', ()=>{

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
        
        Logger.stepNumber(4)
        Logger.step('Clic on a specific product')
        HomeMethods.clickOnProductLink(ProductDetailsData.Monitors.monitor1)
        Logger.verification('Verify that shows the product details page')
        ProductDetailsMethods.verifyProductDetailsPageDisplayed();

        Logger.stepNumber(5)
        Logger.step('Click on Add to cart button')
        ProductDetailsMethods.clickOnAddToCartButton();

        Logger.stepNumber(6)
        Logger.verification('Verify that a confirmation message is shown and the product is added to the cart')
        ProductDetailsMethods.verifyProductAddedMessage()
        CommonMethods.clickOnCartOption()
        CartMethods.verifyProductAdded(ProductDetailsData.Monitors.monitor1);

        Logger.stepNumber(7)
        Logger.step('Click in the cart option of the navbar')
        CommonMethods.clickOnCartOption();

        Logger.stepNumber(8)
        Logger.step('Verify that the purchase cart page is shown')
        CartMethods.verifyCartPageIsShown();

        Logger.stepNumber(9)
        Logger.step('Click on the Place Order button')
        CartMethods.clickOnPlaceOrderButton();

        Logger.stepNumber(10)
        Logger.step('Complete the required fields in the shipping information page')
        PlaceOrderMethods.insertOrderInformation(PlaceOrderData.testData);

        Logger.stepNumber(11)
        Logger.step('Click on purchase button')
        PlaceOrderMethods.clickOnPurchaseButton();

        Logger.stepNumber(12)
        Logger.step('Verify that the confirmation message is shown and the user is directed to the home page')
        PurchaseConfirmationMethods.verifyGreenCheckMarkDisplayed()
        PurchaseConfirmationMethods.clickOnOkButton()
        HomeMethods.verifyHomePageIsShown();

        Logger.postCondition('log out')
        CommonMethods.logout();     
    })
})


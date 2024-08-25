import { CartMethods } from "./pages/cart/cart.methods"
import { CommonMethods } from "./pages/common/common.methods"
import { HomeMethods } from "./pages/home/home.methods"
import { LoginMethods } from "./pages/login/login.methods"
import { ProductDetailsMethods } from "./pages/product-details/product-details.methods"
import { Logger } from "./util/logger"

describe('template spec', () => {
  it('passes', () => {
    const username = 'random01'
    const password = 'random01'

    Logger.stepNumber(1)
    Logger.step('Navigate to demoblaze')
    CommonMethods.navigateToDemoBlaze() //Visito la página
    
    Logger.stepNumber(2)
    Logger.step('Click on the Loggin button')
    CommonMethods.clickOnLogInOption()

    Logger.stepNumber(3)
    Logger.step(`Loggin with this credentials: ${username}/${password}`)
    LoginMethods.login(username, password)
    Logger.verification(`The Home should show: Welcome ${username}`)
    cy.get('a#nameofuser').should('contain.text', username)

    Logger.stepNumber(4)
    Logger.step('Click on a product')
    HomeMethods.clickOnProductLink('Iphone 6 32gb') //Le doy click al producto

    Logger.stepNumber(5)
    Logger.step('Click on the add to cart button')
    ProductDetailsMethods.clickOnAddToCartButton()//Añado el producto al carrito

    Logger.stepNumber(6)
    Logger.step('Click on the home option')
    CommonMethods.clickOnHomeOption()//Va al home

    Logger.stepNumber(7)
    Logger.step('Click on a second product')
    HomeMethods.clickOnProductLink('Samsung galaxy s6')//Click al producto número 2

    Logger.stepNumber(8)
    Logger.step('Click on the add to cart button')
    ProductDetailsMethods.clickOnAddToCartButton()//Añade el producto al carrito

    Logger.stepNumber(9)
    Logger.step('Click on the cart option')
    CommonMethods.clickOnCartOption() //Va al carrito

    Logger.stepNumber(10)
    Logger.step('Delete a product of the cart')
    CartMethods.clickPnDeleteLink('Samsung galaxy s6') //Se elimina el samsung galaxy
    cy.wait(5000)
  })
})
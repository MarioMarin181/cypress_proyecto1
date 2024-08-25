import { CartMethods } from "./pages/cart/cart.methods"
import { HomeMethods } from "./pages/home/home.methods"
import { LoginMethods } from "./pages/login/login.methods"
import { ProductDetailsMethods } from "./pages/product-details/product-details.methods"

describe('template spec', () => {
  it('passes', () => {
    // const usuario = 'random01'
    // const contrasena = 'random01'
    cy.visit('https://demoblaze.com/index.html') //Visito la página
    cy.wait(3000)
    HomeMethods.clickOnProductLink('Iphone 6 32gb') //Le doy click al producto
    cy.wait(3000)
    ProductDetailsMethods.clickOnAddToCartButton()//Añado el producto al carrito
    cy.wait(3000)
    cy.get('li.active a', {timeout: 10000}).click()//Va al home
    cy.wait(3000)
    HomeMethods.clickOnProductLink('Samsung galaxy s6')//Click al producto número 2
    cy.wait(3000)
    ProductDetailsMethods.clickOnAddToCartButton()//Añade el producto al carrito
    cy.wait(3000)
    cy.get('a#cartur', {timeout: 10000}).click() //Va al carrito
    cy.wait(3000)
    CartMethods.clickPnDeleteLink('Samsung galaxy s6') //Se elimina el samsung galaxy
    cy.wait(10000)
  })
})
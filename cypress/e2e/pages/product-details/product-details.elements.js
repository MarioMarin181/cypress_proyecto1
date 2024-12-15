export class ProductDetailsElements{
    static get buttons(){
        return{
            get addToCart(){
                return cy.contains('a', 'Add to cart', {timeout:5000})
            }
        }
    }
}
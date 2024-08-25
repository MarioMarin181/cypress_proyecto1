import { CartElements } from "./cart.elements";

export class CartMethods{
    static clickPnDeleteLink(productName){
        CartElements.links.delete(productName).click();
    }
}
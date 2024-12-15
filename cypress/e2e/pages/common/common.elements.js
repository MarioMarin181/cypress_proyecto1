export class CommonElements{
    static get topMenu(){
        return{
            get home(){
                ////a[@class="nav-link" and @href="index.html"]
                ////a[text()="Home "]
                return cy.contains('a', 'Home ', {timeout: 5000})
            },
            get contact(){
                return cy.contains('a', 'Contact')
            },
            get aboutUs(){
                return cy.contains('a', 'About us')
            },
            get cart(){
                return cy.contains('a', 'Cart')
            },
            get logIn(){
                return cy.contains('a', 'Log in')
            },
            get signUp(){
                return cy.contains('a', 'Sign up')
            },
            get logout(){
                return cy.get('#logout2[style="display: block;"]')
            }
        };
    }

    static get signedUser(){
        return cy.get('a#nameofuser')
    }

}
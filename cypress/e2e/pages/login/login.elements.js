export class LoginElements {//clase para que guarda los elementos de la clase loggin
    static get textboxes() {//método para obtener los selectores de los textboxes de usuario y contraseña
        return {
            get username() {
                return cy.get('input#loginusername', {timeout:5000});
            },
            get password() {
                return cy.get('input#loginpassword', {timeout:5000});
            }
        }
    }

    static get buttons() {//método para obtener los selectores de los botones de cerrar y login
        return {
            get close() {
                return cy.get('div[id="logInModal"] button').eq(1);
            },

            get login() {
                return cy.contains('button', 'Log in', {timeout: 5000});
            }

        };
    }

}
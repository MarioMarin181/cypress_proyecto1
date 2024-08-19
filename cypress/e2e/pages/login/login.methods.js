import { LoginElements } from "./login.elements";

export class LoginMethods {
    static insertUsername(username) {//método para insertar el username
        LoginElements.textboxes.username.invoke('val',username)
        //En loginElements busca el método de textboxes, buscando el selector del textbox 
        //llamado username, además se utiliza el comando type para insertarle el username
    }

    static insertPassword(password){//método para insertar el username
        LoginElements.textboxes.password.invoke('val',password)
        //En loginElements busca el método de textboxes, buscando el selector del textbox 
        //llamado password, además se utiliza el comando type para insertarle el username
    }

    static clickOnLoginButton(){//método para dar click en el botón de login
        LoginElements.buttons.login.click()
        //En loginElements busca el método buttons, buscando el selector del botón login
        //para darle click
    }

    static login(username, password){//método grande que realiza todo el proceso de loggeado 
                                    //con los demás métodos
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnLoginButton()
    }

}
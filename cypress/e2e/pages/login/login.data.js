export class LoginData { //clase que se llama con la palabra import
    static get validCredentials() {//Esto es una clase que permite llamar sus métodos sin instanciarla
        return {//credenciales inválidas
            username: "random01",
            password: "random01"
        };
    }

    static get invalidCredentials() {//Esto es una clase que permite llamar sus métodos sin instanciarla
        return {//credenciales inválidas
            username: "random01",
            password: "7456"
        };
    }

}
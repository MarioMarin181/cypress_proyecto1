export class LoginData { //clase que se llama con la palabra import
    static get invalidCredentials() {//Esto es una clase que permite llamar sus métodos sin instanciarla
        return {//credenciales inválidas
            username: "abc",
            password: "abc"
        };
    }
}
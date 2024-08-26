export class SignupData{
    static get invalidCredentials() {//Esto es una clase que permite llamar sus métodos sin instanciarla
        return {//credenciales inválidas
            username: "mario1234@marin",
            password: "mario1234@marin"
        };
    }
}
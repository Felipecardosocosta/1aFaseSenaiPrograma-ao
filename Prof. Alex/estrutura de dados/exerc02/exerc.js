class Usuarios{

    constructor(){
        this.usuarios = []
    }

    adicionar(entrada){

        this.usuarios.push(entrada)
        return entrada
    }

    remover(){

        return this.usuarios.pop()
    }

}

let usuario = new Usuarios()


console.log(usuario.adicionar("oi"));

console.log(usuario.usuarios);

console.log(usuario.remover());

console.log(usuario.usuarios);




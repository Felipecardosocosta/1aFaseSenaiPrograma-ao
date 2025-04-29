
function gerandoCaracteres() {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    let numeroaleatorio = Math.floor(Math.random() * caracteres.length)
    console.log(numeroaleatorio)

    return caracteres.charAt(numeroaleatorio)
}
function gerar() {
    let quandidade = Number(document.getElementById("QtdDigito").value)

    let senha = ""

    for (let controle = 0; controle <= quandidade; controle++) {

        senha += gerandoCaracteres()

    }

    document.getElementById("resultado").innerHTML = `<p>Sua senha é : <br>${senha} </p>`

}

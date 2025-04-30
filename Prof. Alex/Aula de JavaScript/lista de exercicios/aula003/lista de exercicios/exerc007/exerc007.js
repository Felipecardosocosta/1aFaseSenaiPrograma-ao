
function gerandoCaracteres() {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    let numeroaleatorio = Math.floor(Math.random() * caracteres.length)
    console.log(numeroaleatorio)

    return caracteres.charAt(numeroaleatorio)
}
function gerar() {
    let quandidade = Number(document.getElementById("QtdDigito").value)

    let senha = ""
    if (quandidade == "") {
        alert("[ERRO] Digite a quandidade de caracteres")
    } else {


        for (let controle = 1; controle <= quandidade; controle++) {

            senha += gerandoCaracteres()

        }

        document.getElementById("resultado").innerHTML = `<p>Sua senha é : <br> <br><strong>${senha}</strong> </p>`
    }

}

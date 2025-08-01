
function esconderSection() {
    document.getElementById("Login").classList.remove("liNav")
    document.getElementById("Trilhas").classList.remove("liNav")
    document.getElementById("Eventos").classList.remove("liNav")
    document.getElementById("btn-minhas-trilhas").classList.remove("liNav")
    document.getElementById("criarEventos").classList.remove("liNav")

    document.querySelector(`.cont-fred`).style.display = "none"
    document.querySelector(`.conteiner-cadastro`).style.display = "none"
    document.querySelector(`.conteiner-login`).style.display = "none"
    document.querySelector(`.container-Evento`).style.display = "none"
    document.querySelector(`.conteiner-MinhasTrilhas`).style.display = "none"

}
function abrirLoginCadastro(cont) {
    document.getElementById("contCadast").style.display = "none"
    document.getElementById("contLogin").style.display = "none"

    document.getElementById(cont).style.display = "flex"

}
function abrirTela(nome) {
    esconderSection()
    let cont = nome.split(',', 2)
    document.getElementById(cont[0]).classList.add("liNav")
    console.log(cont[1]);

    document.querySelector(`.${cont[1]}`).style.display = "flex"

    //Fred
    document.querySelector(`.cont-map`).innerHTML =
    `<img src="Mapas/FloripaGeral.png">`
    //Fred

}
function usuarioLogado() {
    return JSON.parse(localStorage.getItem("logado"))
}
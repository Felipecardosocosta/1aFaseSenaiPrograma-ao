let click = 0
function contar() {
    click++
    console.log(click)


}
function resultado() {
    document.getElementById("resposta").innerHTML = `<p><strong>A quandidade de cliques foi de: ${click}</strong></p>`
}
function resetar() {
    click = 0
    document.getElementById("resposta").innerHTML = "<p><strong>Resultado ...</strong></p>"

}
const bancoDados = localStorage

const listaSalva = JSON.parse(bancoDados.getItem("listaArmazenada")) || []
let id = JSON.parse(bancoDados.getItem("id")) || 0

mostrarDados()

function salvarBanco() {
    bancoDados.setItem("id", JSON.stringify(id))
    bancoDados.setItem("listaArmazenada", JSON.stringify(listaSalva))
    location.reload()
}
function excluirDados(indice) {

    listaSalva.splice(indice, 1)
    salvarBanco()
}
function salvarItemEditado(id) {

    let novoArquivi = document.getElementById(`${id}`).value
    console.log(novoArquivi);

    let objeto = listaSalva.find(index => index.ident === id)

    objeto.item = novoArquivi

    salvarBanco()
}
function salvarValorEditado(id) {

    let novoValor = document.getElementById(`valor${id}`).value
    console.log(novoValor);

    let objeto = listaSalva.find(index => index.ident === id)

    objeto.valor = novoValor

    salvarBanco()
}
function mostrarDados() {
    const displayLista = document.getElementById("list")
    console.log(displayLista);

    let valorTotal = 0

    const displayRes = document.getElementById("resultado")


    const displayValor = document.getElementById("valor")

    const displayButtonDeletar = document.getElementById("excluir")

    listaSalva.forEach((element, index) => {

        //Item da lista
        displayLista.innerHTML += `<div class = "Linhas" id="linha${element.ident}">

        <label for = "${element.ident}"></label>

        <input type="text" class="inputList" id="${element.ident}" value ="${element.item}" disabled> 
        
        <button onclick="abrirEdiçaoItem(${element.ident},'${element.item}')" class = "buttonEdit">\u{1F58A}</button>
        </div>`

        //Valor do item
        displayValor.innerHTML += `<div class = "Linhas" id="linhaValor${element.ident}">

        <label for = "valor${element.ident}"></label>

        <input type="text" class="inputList" id="valor${element.ident}" value ="${element.valor}" disabled> 
        
        <button onclick="abrirEdiçaoValor(${element.ident},'${element.valor}')" class = "buttonEdit">\u{1F58A}</button>
        </div>`

        //Deletar
        displayButtonDeletar.innerHTML += `<button onclick="excluirDados(${index})"> \u{274C}</button>`

        //Valor final 

        valorTotal += Number(element.valor)

        displayRes.innerText = `Total: ${valorTotal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })}`


    });
}
function abrirEdiçaoItem(ident, n) {


    document.getElementById(`linha${ident}`).innerHTML = `<label for = "${ident}"></label>
    
    <input type="text" id="${ident}" value ="${n}"> 
    
    <button id= "buttonAparece${ident}" onclick=" salvarItemEditado(${ident})">\u{2714}</button>
        
        <button onclick="location.reload()" class = "buttonEdit">\u{274C}</button>
        </div>`
}
function abrirEdiçaoValor(ident, n) {


    document.getElementById(`linhaValor${ident}`).innerHTML = `<label for = "valor${ident}"></label>
    
    <input type="text" id="valor${ident}" value ="${n}" > 
    
    <button id= "buttonAparece${ident}" onclick=" salvarValorEditado(${ident})">\u{2714}</button>
        
    <button onclick="location.reload()" class = "buttonEdit">\u{274C}</button>
    </div>`
}
function entradaDados() {

    const entradaDados = document.getElementById("textoLista")
    const valorItem = document.getElementById("valorItem")
    console.log();

    if (entradaDados.value.length === 0 || valorItem.value.length === 0) alert("Escreva alguma coisa")
    else {
        id++
        listaSalva.push({

            item: entradaDados.value,
            valor: valorItem.value,
            ident: id

        })
        salvarBanco()
    }


}
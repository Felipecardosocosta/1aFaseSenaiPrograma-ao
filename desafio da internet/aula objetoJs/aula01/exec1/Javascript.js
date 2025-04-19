let banco = [
    {
        nome: "felipe",
        id: 1234,
        ecomoeda: 2
    },
    {
        nome: "dara",
        id: 1234,
        ecomoeda: 2
    }

]




function clicou() {
    let img = document.createElement("img")
    img.setAttribute("id", "img1")
    img.setAttribute("src", "floripa.jpg")
    document.getElementById("divii").appendChild(img)




    let nome = document.getElementById("nome").value
    let ide = Number(document.getElementById("id").value)
    let eco = Number(document.getElementById("Bqd").value)


    console.log(nome)
    let resultado = banco.find(item => item.nome === nome)


    console.log(resultado)

    if (resultado != undefined) {

        console.log(resultado)
    } else {

        banco.push({ nome: nome, id: ide, ecomoeda: eco })
        console.log(banco)
    }

}

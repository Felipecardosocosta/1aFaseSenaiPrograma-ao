const infsListaTrilhas = [
    {
        nome: ``, pPartida: ``, pChegada: ``,
        regiao: `Norte`, cep: ``,
        distancia: `Km`, tempo: 'hm', relevo: ``, elevacao: `m`,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="Icones/image.svg">`,
    },

    {
        nome: ``, pPartida: ``, pChegada: ``,
        regiao: `Norte`, cep: ``,
        distancia: `Km`, tempo: 'hm', relevo: ``, elevacao: `m`,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="Icones/image.svg">`,
    },

    //-----------------------------------------------------------------------------

    {
        nome: ``, pPartida: ``, pChegada: ``,
        regiao: `Central`, cep: ``,
        distancia: `Km`, tempo: 'hm', relevo: ``, elevacao: `m`,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="Icones/image.svg">`,
    },

    {
        nome: ``, pPartida: ``, pChegada: ``,
        regiao: `Central`, cep: ``,
        distancia: `Km`, tempo: 'hm', relevo: ``, elevacao: `m`,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="Icones/image.svg">`,
    },

    //-----------------------------------------------------------------------------

    {
        nome: ``, pPartida: ``, pChegada: ``,
        regiao: `Leste`, cep: ``,
        distancia: `Km`, tempo: 'hm', relevo: ``, elevacao: `m`,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="Icones/image.svg">`,
    },

    {
        nome: ``, pPartida: ``, pChegada: ``,
        regiao: `Leste`, cep: ``,
        distancia: `Km`, tempo: 'hm', relevo: ``, elevacao: `m`,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="Icones/image.svg">`,
    },

    //-----------------------------------------------------------------------------

    {
        nome: ``, pPartida: ``, pChegada: ``,
        regiao: `Sul`, cep: ``,
        distancia: `Km`, tempo: 'hm', relevo: ``, elevacao: `m`,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="Icones/image.svg">`,
    },

    {
        nome: ``, pPartida: ``, pChegada: ``,
        regiao: `Sul`, cep: ``,
        distancia: `Km`, tempo: 'hm', relevo: ``, elevacao: `m`,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="Icones/image.svg">`,
    },
]
localStorage.setItem('ListagemTrilhas', JSON.stringify(infsListaTrilhas))
function logInOut() {
    /*let usuario = localStorage.getItem("LogIN")
    if(usuario != undefined){
        return true
    }
    else {
        return false
    }*/
    return true
}
function limparTrilhas() {
    document.querySelector('.cont-ListasTrilhas').innerHTML = ``
}
function limparDadosTrilhas() {
    document.querySelector('.cont-DadosTrilha-Inf').innerHTML = ``
}
function limparMapa(){
    document.querySelector(`.cont-map`).innerHTML = ``
}

function mostrarListTrilhasReg(RegTrilha) {
    limparTrilhas()
    limparDadosTrilhas()
    limparMapa()

    let trilhasReg = RegTrilha
    let nomeRegiao
    
    if(trilhasReg === 'Norte'){
        document.querySelector(`.cont-map`).innerHTML = 
        `<img src="Mapas/FloripaNorte.png">`
    }

    nomeRegiao = infsListaTrilhas.filter(filtroRegTrilha => filtroRegTrilha.regiao === trilhasReg)

    let nomesTrilhas
    nomesTrilhas = document.querySelector('.cont-ListasTrilhas')
    for (const trilha of nomeRegiao) {
        nomesTrilhas.innerHTML +=
            `<div onclick="mostrarInfTrilha('${trilha.nome}')" class="divsBttnTrilha">
                <p>
                    ${trilha.nome}
                </p>
            </div>`
    }

}
function mostrarInfTrilha(nomeTrilha) {
    let trilhaNome = nomeTrilha
    let dadosTrilha

    if (logInOut()) {
        dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.nome === trilhaNome)
        document.querySelector('.cont-DadosTrilha-Inf').innerHTML =
            `   <div class='dadosTrilha'>
                <img src="Icones/map-trifold.svg" class='iconsDadosTrilha'>
                <span>Trilha: ${dadosTrilha.nome}</span>
            </div>
            <div class='dadosTrilha'>
                <img src="Icones/map-pin.svg" class='iconsDadosTrilha'>
                <span>De: ${dadosTrilha.pPartida}</span>
            </div>
            <div class='dadosTrilha'>

                <span>Para: ${dadosTrilha.pChegada}</span>
                <img src="Icones/map-pin-line.svg" class='iconsDadosTrilha'>
            </div>
            <div class='dadosTrilha'>
                <span>Dificuldade:</span>
                <span>Indicada: ${dadosTrilha.nvlTSite} / Relatada: ${dadosTrilha.nvlTUsuario}</span>
            </div>
            <div class='dadosTrilha'>
                <img src="Icones/path.svg" class='iconsDadosTrilha'>
                <span>${dadosTrilha.distancia} / </span>
                <img src="Icones/timer.svg" class='iconsDadosTrilha'>
                <span> ${dadosTrilha.tempo}</span>
            </div>
            <div class='dadosTrilha'>
                <img src="Icones/person-simple-hike.svg" class='iconsDadosTrilha'>
                <span>Relevo: ${dadosTrilha.relevo}</span> 
                <span> / Elevação: ${dadosTrilha.elevacao}</span>
            </div>                    
        `
        dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.nome === trilhaNome)
        document.querySelector('.DadosTrilha-coment').innerHTML =
            `Área destinada aos comentários sobre a trilha`

        dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.nome === trilhaNome)
        document.querySelector('.DadosTrilha-fotos').innerHTML =
            `${dadosTrilha.img}`

        document.querySelector('.cont-bttn-CriarEvent-LogIn').innerHTML =
            `<button class='bttn-CriarEvent-LogIn' onclick="CRIAREVENTO('${dadosTrilha.nome}')">Criar Evento</button>`

    } else {
        dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.nome === trilhaNome)
        document.querySelector('.cont-DadosTrilha-Inf').innerHTML =
            `   <div class='dadosTrilha'>
                <img src="Icones/map-trifold.svg" class='iconsDadosTrilha'>
                <span>Trilha: ${dadosTrilha.nome}</span>
            </div>
            <div class='dadosTrilha'>
                <img src="Icones/map-pin.svg" class='iconsDadosTrilha'>
                <span>De: ${dadosTrilha.pPartida}</span>
            </div>
            <div class='dadosTrilha'>

                <span>Para: ${dadosTrilha.pChegada}</span>
                <img src="Icones/map-pin-line.svg" class='iconsDadosTrilha'>
            </div>
            <div class='dadosTrilha'>
                <span>Dificuldade:</span>
                <span>Indicada: ${dadosTrilha.nvlTSite} / Relatada: ${dadosTrilha.nvlTUsuario}</span>
            </div>
            <div class='dadosTrilha'>
            <span>Para mais informações: <a href="URL_do_link">login</a>
            </div>                   
        `
        dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.nome === trilhaNome)
        document.querySelector('.DadosTrilha-coment').innerHTML =
            `Área destinada aos comentários sobre a trilha`

        dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.nome === trilhaNome)
        document.querySelector('.DadosTrilha-fotos').innerHTML =
            `${dadosTrilha.img}`
    }

}
function CRIAREVENTO(nomeTrilhaEvento) {
    let eventoTrilhaNome = nomeTrilhaEvento
    console.log(eventoTrilhaNome)
}
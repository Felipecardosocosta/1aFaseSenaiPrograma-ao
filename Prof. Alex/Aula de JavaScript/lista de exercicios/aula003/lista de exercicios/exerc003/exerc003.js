function iniciar() {
    let max = 5
    let min = 1
    let numeroAleatorio = Math.round(Math.random() * (max - min) + min)
    console.log(numeroAleatorio)

    let horospoco = prompt(`Digite seu Horóscopo :`).toLowerCase()
    console.log(horospoco)


    if (horospoco == "áries" || horospoco == "touro:" || horospoco == "gêmeos" || horospoco == "câncer" || horospoco == "leão" || horospoco == "virgem" || horospoco == "libra" || horospoco == "escorpião" || horospoco == "sagitário" || horospoco == "capricórnio" || horospoco == "aquário" || horospoco == "peixes") {



        let fraze1 = `A energia cósmica está a seu favor hoje. Use-a com sabedoria, ${horospoco}`
        let fraze2 = `As estrelas conspiram para um dia produtivo e cheio de boas vibrações, ${horospoco}`
        let fraze3 = `Deixe a intuição guiar seus passos e confie no universo, ${horospoco}`
        let fraze4 = `Pequenas ações podem gerar grandes resultados. Acredite no seu potencial! ${horospoco}`
        let fraze5 = `O universo te lembra: você é capaz de coisas incríveis, ${horospoco}`

        if (numeroAleatorio === 1) {
            alert(fraze1)

        } else if (numeroAleatorio === 2) {
            alert(fraze2)

        } else if (numeroAleatorio === 3) {

            alert(fraze3)

        } else if (numeroAleatorio === 4) {
            alert(fraze4)

        } else if (numeroAleatorio === 5) {
            alert(fraze5)
        }
    } else {
        alert("[ERRO]Digite seu Horóscopo!!")
    }




}
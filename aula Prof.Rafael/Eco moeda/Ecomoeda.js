//const qtdBrinq = Number(document.getElementById("nuBrinq"))

let banco = [
    {
        nome: "felipe",
        ident: "0888",
        ecomoeda: 10
    }
]
function enviou() {
    const qtdBrinq = Number(document.getElementById("nuBrinq").value)
    const result = document.getElementById("Ecomoeda")
    let Ecomoed = 0

    let nome = document.getElementById("nomeUsuario").value
    let registro = document.getElementById("registro").value
    let registrar
    console.log(nome)
    console.log(registro)
    console.log(qtdBrinq)

    if (nome == "" || registro == "" || qtdBrinq === 0) {
        alert("[ERRO] Verifique se foi preenchido corretamente")
    } else {

        console.table(banco)
        let cadastro = banco.find(item => item.ident == registro)

        //console.log(cadastro)

        if (qtdBrinq === 0) {

            result.innerHTML = `<p>Detalhes de sua venda:</p>
        <hr>
        <p>Voce nao ganhou nem uma Ecomoeda</p>`

            if (cadastro != undefined) {

                result.innerHTML += `<p>Voce tem no banco ${cadastro.ecomoeda} Ecomoedas</p>`
            } else {
                result.innerHTML += `
            <hr>
            <p>Voce nao estava cadastrado
            <hr>
            Acabei de fazer seu cadastro
            <hr>
            Agora voce tem um saldo de ${Ecomoed} em seu registro</p>`
                registrar = regitrando()
                console.table(banco)
            }

        } else if (qtdBrinq === 1) {

            Ecomoed += 1

            result.innerHTML = `<p>Detalhes de sua venda:</p>
        <hr>
        Voce recebeu ${Ecomoed} Ecomoeda`

            if (cadastro != undefined) {

                cadastro.ecomoeda += Ecomoed

                //console.table(banco)
                let cadastroAtzd = banco.find(item => item.ident === registro)

                result.innerHTML += `
            <hr>
            <p>Voce tem guardado no banco ${cadastroAtzd.ecomoeda} Ecomoedas</p>`
                console.table(banco)
            } else {

                result.innerHTML += `
            <hr>
            <p>Voce nao estava cadastrado
            <hr>
            Acabei de fazer seu cadastro
            <hr>
            Agora voce tem um saldo de ${Ecomoed} em seu registro</p>`
                registrar = regitrando()
                console.table(banco)

            }



        } else if (qtdBrinq === 2) {
            Ecomoed += 2

            result.innerHTML = `<p>Detalhes de sua venda:</p>
        <hr>
        Voce recebeu ${Ecomoed} Ecomoedas`

            if (cadastro != undefined) {
                cadastro.ecomoeda += 2

                result.innerHTML += `
            <hr>
            <p>Voce tem guardado no banco ${cadastro.ecomoeda} Ecomoedas</P>`
            } else {
                result.innerHTML += `
            <hr>
            <p>Voce nao estava cadastrado
            <hr>
            Acabei de fazer seu cadastro
            <hr>
            Agora voce tem um saldo de ${Ecomoed} em seu registro</p>`
                registrar = regitrando()
                console.table(banco)
            }

        } else if (qtdBrinq >= 3) {
            Ecomoed += 3

            result.innerHTML = `<p>Detalhes de sua venda:</p>
        <hr>
        Voce recebeu ${Ecomoed} Ecomoedas`

            if (cadastro != undefined) {
                cadastro.ecomoeda += Ecomoed

                result.innerHTML += `
            <hr>
            <p>Voce tem guardado no banco ${cadastro.ecomoeda} Ecomoedas </p>`
            } else {
                result.innerHTML += `
            <hr>
            <p>Voce nao estava cadastrado
            <hr>
            Acabei de fazer seu cadastro 
            <hr>
            Agora voce tem um saldo de ${Ecomoed} em seu registro</p>`
                registrar = regitrando()
                console.table(banco)
            }

        }


        function regitrando() {
            banco.push({ nome: nome, ident: registro, ecomoeda: Ecomoed })
        }
        document.getElementById("nomeUsuario").value = " "
        document.getElementById("registro").value = " "
        document.getElementById("nuBrinq").value = " "
    }

}
function paginaVenda() {

    document.getElementById("vendaPagina").style.display = "block"
    document.getElementById("compraPagina").style.display = "none"
}

function paginaCompra() {
    document.getElementById("vendaPagina").style.display = "none"
    document.getElementById("compraPagina").style.display = "block"
}
function enviarCompra() {

    let nomeComprador = document.getElementById("nomeUsuarioCompra").value
    let identida = document.getElementById("registroCompra").value
    let valorBqd = document.getElementById("valorBrinquedo").value

    console.log(nomeComprador)
    console.log(identida)
    console.log(valorBqd)

    if (nomeComprador == "" || identida == "" || valorBqd == "") {
        alert("[ERRO] Verifique se foi preenchido corretamente")
    } else {

        let cadastro = banco.find(item => item.ident == identida)
        console.log(cadastro)

        if (cadastro != undefined) {
            console.log(cadastro)

            let valorsobra = cadastro.ecomoeda - valorBqd

            cadastro.ecomoeda = valorsobra

            if (valorsobra > 0) {
                document.getElementById("EcomoedaCompra").innerHTML = `<p>Detalhes de sua compra:</p>
            <hr>
            <p>Sua compra foi efetuada com suceso</p> 
            <hr>
            <p>O seu saldo na conta agora é de ${cadastro.ecomoeda} Ecomoedas</p>`

            } else {
                alert("Seu saldo é insufiente para comprar esse brinquedo")
            }

        } else {
            console.table(banco)
            document.getElementById("EcomoedaCompra").innerHTML = `<h3>Voce nao tem cadastro no banco de dados!!</h3>
        <hr>
        <p>Caso queira efetuar uma compra faça o cadasrto e adicione Ecomoedas</p>`
        }

        document.getElementById("nomeUsuarioCompra").value = " "
        document.getElementById("registroCompra").value = " "
        document.getElementById("valorBrinquedo").value = " "
    }
} 
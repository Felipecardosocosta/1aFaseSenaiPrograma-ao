/*🎁 9. Presente Secreto
Lista de exercícios 4
História:
Você entrou em um jogo de presente secreto. Se você tirou "Carlos", você deve
comprar um livro. Se tirou "Ana", um chocolate. Qualquer outro nome, um
presente surpresa!
Desafio:
let nomeSorteado;
Resultado esperado:
"Compre um livro 📚"
"Compre um chocolate 🍫"
"Compre um presente surpresa 🎁" */

let nomeSorteado

function clicar(){

    nomeSorteado = prompt('Digite quem voce tirou no amigo secreto: ')

    if(nomeSorteado === 'Carlos'){
        console.log('Compre um livro 📚')
        alert('Compre um livro 📚')
    }else if (nomeSorteado === 'Ana'){
        console.log('Compre um chocolate 🍫')
        alert('Compre um chocolate 🍫')

    }else {
        console.log('Compre um presente surpresa 🎁')
        alert('Compre um presente surpresa 🎁')
    }


}

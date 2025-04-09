/*História:
Um guerreiro encontrou um dragão! Se ele tiver uma espada mágica e mais de 18
anos, ele pode lutar. Se não, deve fugir.
Desafio:
Crie um programa que receba:
let idade;
let temEspadaMagica;
E exiba:
"Você pode lutar contra o dragão!" ou
Lista de exercícios 1
"Fuja enquanto é tempo!" */

let idade = Number(prompt('Qual sua idade; '))
let temEspadaMagica

if(idade >= 18){
    temEspadaMagica = prompt('Voce tem espada magica?(Sim/Não) ')
    if(temEspadaMagica === 'Sim'){
        console.log('Você pode lutar contra o dragão!"')
        
    }
}else {console.log('Fuja enquanto é tempo!')
    
}



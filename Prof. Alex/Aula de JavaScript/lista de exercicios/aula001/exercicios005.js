/*🧃 7. O Robô do Café
Lista de exercícios 3
História:
Um robô serve café conforme o pedido. Ele só aceita "café", "capuccino" ou
"expresso". Qualquer outro pedido, ele responde educadamente.
Desafio:
let pedido;
Responda com:
"Servindo café ☕"
"Servindo capuccino 🧋"
"Servindo expresso 🔥"
"Desculpe, não temos esse tipo de café 😔" */

let pedido


pedido = prompt('Escreva o tipo de cafe que voce deseja:(café/capuccino/expresso):')


if(pedido === 'café'){
    console.log(`Servindo ${pedido}`)
    alert(`Servindo ${pedido} ☕ `)
    document.write(`Servindo Café☕`)
}else if (pedido=== 'capuccino'){
    console.log(`Servindo ${pedido}`)
    alert(`Servindo ${pedido} ☕ `)
    document.write(`Servindo Capuccino☕`)
}else if (pedido=== "expresso"){
    console.log(`Servindo ${pedido}`)
    alert(`Servindo ${pedido} 🔥 `)
    document.write(`Servindo Capuccino 🔥`)
}else {
    console.log('Desculpe, não temos esse tipo de café!!😔')
    alert('Desculpe, não temos esse tipo de café!!😔')
    document.write(`Desculpe, não temos esse tipo de café!!😔`)
}


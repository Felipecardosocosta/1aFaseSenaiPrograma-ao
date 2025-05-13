let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]



let soma = numeros.reduce((numeroAcumulado, proximoNumero) => numeroAcumulado + proximoNumero)




console.log(soma)

let divididoPor2 = numeros.filter(dividido => dividido % 2 == 0)

console.log(divididoPor2)
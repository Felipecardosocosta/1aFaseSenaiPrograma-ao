let array11 = ["Lucas","Mariana","Rafa","Bia","Eduardo"]

let maior4 = array11.filter(element => element.length > 4 )

console.log("\nMaior que 4 letras: "+maior4+"\n");

let array12 = [10,20,30,40,50,60,70,80,90,100]


let dobrado = array12.map(element => element*2)

console.log("Numero dobrado: " + dobrado+"\n");

let array13 = [47,12,89,35,76,23,58,91,6,64]

let numerosPares = array13.filter(element=> element % 2 ==0)

console.log("Numeros pares: "+numerosPares+"\n");

let array14 = [47,12,89,35,76,23,58,91,6,64]

let somaComReduce = array14.reduce((acumulado, proximoNumero)=> acumulado + proximoNumero,0)

console.log("Soma de todos numeros com reduce: "+somaComReduce+"\n");

let array15 = [47,12,89,35,76,23,58,91,6,64]

let maiorNumero = array15[0]

array15.forEach(element => {
    
    if(element > maiorNumero) maiorNumero = element
})

console.log("O maior numero é : "+maiorNumero+"\n");

let menorNumero = array15[0]

array15.forEach(element => {
    
    if(element < menorNumero) menorNumero = element
})

console.log("O menor numero é : "+menorNumero+"\n");

let arrayInvertido = array15.map((element,indice)=> {
    
    return array15[array15.length-indice-1]
})

console.log("o array invertido é: "+arrayInvertido+"\n");

let arrays = array15.concat(array11)

console.log("Juntando dois array: "+arrays+"\n");



let array19 = ["Lucas","Mariana","Rafa","Bia","Eduardo"]

array19.sort()

console.log("Organizando array em ordem alfabética: "+array19 +"\n");


let array20 = [47,12,89,35,76,23,58,91,6,64]

array20.sort()

array20.reverse()

console.log(array20);








 







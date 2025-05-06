let multiplicador = 1
while (multiplicador <= 10) {
    let multiplicar = 1

    while (multiplicar <= 10) {
        let resultado = multiplicar * multiplicador
        

        document.getElementById(`resultado${multiplicador}`).innerHTML += `Tabuada ${multiplicador} X ${multiplicar} = ${resultado} <br>`
       
        multiplicar++
    }
    multiplicador++
}
/*Desenvolver um programa que realize o cálculo de consumo de combustível por quilometragem, 
para veículos (km por litro). Para isso, devem ser digitados os dados de distância total percorrida (km)
 e total de combustível gasto (litros), mostrando o resultado ao final.*/



programa {
  funcao inicio() {

    //Declaraçao de variaveis

    real distanciaTotal, gastoCombustivel, consumoCombustivel



    
    //Entrada de dados

    escreva("Digite quantos quilometros voce percorreu : ")
    leia(distanciaTotal)

    escreva("Digite quanto de combustivel em litros voce gastou para percorrer esse trajato : ")
    leia(gastoCombustivel)


    
    //Prossecamento de dados

    consumoCombustivel = distanciaTotal / gastoCombustivel


    
    //Saida de dados

    escreva("Seu veiculo consumiu a cada quilometro : ", consumoCombustivel," km/L")
    







  }
}

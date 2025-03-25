// Faça um programa onde o usuário deve digitar 
//a temperatura em graus Celsius e mostrar na tela essa temperatura convertida em Fahrenheit.

programa {
  funcao inicio() {
     
     // Declaração de variáveis
     
     real grauCelsius, fahrenheit

    // Entrada de Dados

    escreva("Digite temperatura que deseja converter de grau Celsius para Fahrenheit : ")
    leia (grauCelsius)

    // Processamento, Cálculo, Lógica
    
    fahrenheit = grauCelsius * 1.8 + 32

    // Saída de Dados

    escreva( "A temperatura em Fahrenheit é : ", fahrenheit )
  }
}

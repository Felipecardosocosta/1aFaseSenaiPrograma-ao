/*5.15 Escreva um programa que leia o valor de três ângulos de um
triângulo e escreva se o triângulo é acutângulo, retângulo ou
obtusângulo, sendo que:
- Triângulo retângulo: tem um ângulo reto (90 graus)
- Triângulo obtusângulo: tem um ângulo obtuso (maior que 90 graus)
- Triângulo acutângulo: tem 3 ângulos agudos (menor que 90 graus)
 */





programa {
  funcao inicio() {

    //descrição de variaveis
    
    inteiro primeiroAngulo, segundoAngulo , terceiroAngulo

    //entrada de dados 

    escreva("Escreva o Primeiro ângulo: ")
    leia(primeiroAngulo)
    escreva("Escreva o Segundo ângulo: ")
    leia(segundoAngulo)
    escreva("Escreva o Terceiro ângulo: ")
    leia(terceiroAngulo)

    //Processamento de dados // saida de dados

    se(primeiroAngulo == 90 ou segundoAngulo == 90 ou terceiroAngulo ==90){
      escreva("É um triângulo retângulo")
    }senao se(primeiroAngulo > 90 ou segundoAngulo > 90 ou terceiroAngulo > 90){
      escreva("É um triângulo obtusângulo")
    }senao escreva("É um Triângulo acutângulo")



    
  }
}

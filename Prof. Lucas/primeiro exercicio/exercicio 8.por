//Na sua lista de compras do mercado, constam apenas 3 itens: arroz, batata palha e um suco de garrafa. 
//Porém, você possui apenas uma nota de R$100 para pagar. Faça um programa no qual sejam digitados os valores dos itens
// e mostre na tela valor que você deve receb

programa {
  funcao inicio() {

     // Declaração de variáveis

    real arroz , batataPalha , sucoGarrafa , troco , custo

     // Entrada de Dados

    escreva("Pofavor digite o valor do arroz : ")
    leia(arroz)

    escreva("Pofavor digite o valor da batata palha : ")
    leia(batataPalha)


    escreva("Pofavor digite o valor da garrafa de suco : ")
    leia(sucoGarrafa)

    // Processamento, Cálculo, Lógica

    troco = 100 - arroz + batataPalha + sucoGarrafa

    custo = arroz + batataPalha +sucoGarrafa

    // Saída de Dados

    escreva("O troco será de : ", troco , "(R$)", "\nE seu custo sera de : ", custo, "(R$)")











  }
}

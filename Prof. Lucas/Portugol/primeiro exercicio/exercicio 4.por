//Desenvolva um programa que pergunte ao usuário o salário bruto e calcule o salário líquido, 
//considerando um desconto de 20% para impostos.



programa {
  funcao inicio() { 
    
    // Declaração de Variaveis 
    real salarioBruto, salarioLiquido , multiplicacao = 20 , divisao = 100

    //Entrada de Dados

    escreva("Qual é o seu salario : ")
    leia(salarioBruto)

    // Processamento, Cálculo, Lógica

    salarioLiquido = (multiplicacao * salarioBruto) / divisao

    // Saída de Dados

    escreva("o salario liquido é : ", salarioLiquido)






  }
}

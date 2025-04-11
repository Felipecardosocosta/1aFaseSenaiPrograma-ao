/*Uma pousada cobra R$280 reais a diária por quarto e R$15 reais o café por pessoa por dia.
 Você pretende passar um tempo com alguns amigos nessa pousada, sendo que todos ficarão no mesmo quarto.
  Informar a quantidade de pessoas, o número de diárias e quantas pessoas do grupo vão querer café diário. 
  Mostrar na tela o total a pagar.*/




programa {
  funcao inicio() {

    //Declaraçao de variaveis

    real quantidadePessoas, numeroDiarias , cafeDiario , totalPagar


    //Declaraçao de variaveis fixas

    real diaria = 280, cafe = 15
    
    
    
    //Entrada de dados

    escreva("Quantas pessoas iram se ospedar : ")
    leia(quantidadePessoas)

    escreva("Quantas diarias ira precisar : ")
    leia(numeroDiarias)

    escreva("quantas pessoas iram querer o cafe diario : ")
    leia(cafeDiario)
    
    
    
    //Prossecamento de dados

    totalPagar = (diaria * numeroDiarias) + (cafeDiario * cafe)


    
    
    
    //Saida de dados

    escreva("O total para pagar é de  : ", totalPagar, "R$")
    
  }
}

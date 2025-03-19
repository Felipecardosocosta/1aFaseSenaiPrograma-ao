/*Criar um programa que realize o cálculo de uma média ponderada (considerando o peso da nota) da faculdade. 
A média é composta por três notas: Atividade Individual, Seminário em Equipe, Projeto final. 
O usuário deve digitar as três notas e os seus respectivos pesos. A média deve ser calculada e mostrada na tela.
*/


programa {
  funcao inicio() {

    
    //Declaraçao de variaveis
    
    real atividadeIndividual, seminarioEquipe , projetoFinal, mediaPonderada, mediaPonderadaFinal
    inteiro atividadeIndividualPeso, seminarioEquipePeso , projetoFinalPeso , mediaPonderadaPeso
    

    //Entrada de dados

    escreva("Digite a nota da atividade individual : ")
    leia(atividadeIndividual)
    
    escreva("Digite o peso da atividade individual : ")
    leia(atividadeIndividualPeso)

    escreva("Digite a nota do seminario em equipe : ")
    leia(seminarioEquipe)

    escreva("Digite o peso do seminario em equipe : ")
    leia(seminarioEquipePeso)

    escreva("Digite a nota do projeto final em equipe : ")
    leia(projetoFinal)

    escreva("Digite a peso do projeto final em equipe : ")
    leia(projetoFinalPeso)


    
    //Prossecamento de dados

    mediaPonderada = (atividadeIndividual * atividadeIndividualPeso) + (seminarioEquipe * seminarioEquipePeso) + (projetoFinal * projetoFinalPeso)

    mediaPonderadaPeso = atividadeIndividualPeso + seminarioEquipePeso + projetoFinalPeso

    mediaPonderadaFinal = mediaPonderada / mediaPonderadaPeso


    //Saida de dados

    escreva("A sua media ponderada é de : ", mediaPonderadaFinal)
    
  }
}

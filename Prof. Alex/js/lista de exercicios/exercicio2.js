/*3. A Pizzaria do Código
História:
João quer pedir pizza, mas só se:
Ele tiver dinheiro e estiver com fome.
Ou se for sexta-feira (porque é tradição!).
Desafio:
let temDinheiro;
let estaComFome;
let hojeEhSexta;
Exiba:
"Vamos pedir pizza!" ou
"Hoje não é dia de pizza." */

let temDinheiro
let estaComFome
let hojeEhSexta

hojeEhSexta = confirm('Hoje é sexta-feira ?(Sim/Nao) ')
temDinheiro = prompt('Voce tem dinheiro?(Sim/Nao) ')
estaComFome = prompt('Voce esta com fome?(Sim/Não)')

if(hojeEhSexta === 'Sim' || temDinheiro === 'Sim' && estaComFome ==='Sim'){
    console.log('Vamos pedir pizza!')

}else { console.log('Hoje não é dia de pizza')
    
    


}
    

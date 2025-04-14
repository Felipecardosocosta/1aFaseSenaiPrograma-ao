/*//14. Passeio com o Pet
        Lista de exercícios 6
        História:
        Você só vai passear com seu cachorro se não estiver chovendo e se tiver tempo.
        Desafio:
        let estaChovendo;
        let temTempo;
        Exiba:
        "Hora do passeio! 🐾" ou
        "Hoje não vai dar... ☔" */


let estaChovendo


estaChovendo = confirm("Esta chovendo ? ")

if (estaChovendo === false) {
         let temTempo

        temTempo = confirm("Voce esta com tempo?")

        if (temTempo === true) {
                alert("Hora do passeio! 🐾")
        } else {
                alert("Hoje não vai dar... ☔")
        }

} else alert("Hoje não vai dar... ☔")











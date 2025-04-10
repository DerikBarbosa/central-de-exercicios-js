// FOR
// 1o = declarar contador.
// 2o = condição (enquanto).
// 3o = incremento.

/*for(let contador = 1; contador <=5; contador++) {

    alert(contador);

}

function exemploFor () {


}

function exemploWhile () {

    let contador = 1;

    while (contador <= 10) {

        console.log(contador)

    }



} 

exemploWhile()*/



/*function exercicioDeRepetição() {

let numero = prompt("Digite um numero para ver a tabuada:")

for (let i = 1; 1 <= 10; i++){
     console.log('${numero} x ${i} = $')

}


console.log("fim da tabuada")

}*/

/* function exercicioDeRepetição003 () {

    let N = prompt("digite um numero N:")

    let soma = 0;

    let i = 1 

    while (i <= N){
        soma += i;
        i++;

    }

    console.log("A soma dos numeros de 1 até " + N + " é: " + soma);


    } */

    // function exercicioDeRepetiçãoIntermediario001 () { 

    //     for ()




    // }




    function exercicioDeRepetiçãoIntermediario002 () {

        let numeroAleatorio  = Math.floor(math.random() * (100 - 1 ) + 1);

        let tentativa

        while (tentativa != numeroAleatorio) {

             tentativa= prompt("insira um numero");

            if (numeroAleatorio > tentativa) {

                alert("numero aleatorio é maior");

            } else if (numeroAleatorio < tentativa) {
 
                alert("numero aleatorio é menor")


            } else {

                alert("voce acertou!")

            }


        }

    } exercicioDeRepetiçãoIntermediario002 ()
    





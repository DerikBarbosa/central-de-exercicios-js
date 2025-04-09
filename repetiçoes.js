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

function exercicioDeRepetiçãoNivelIntermediario002() {

let numero = prompt ("digite um numero")

let numero2 = prompt ("digite o outro numero")

let numero3 = prompt ("digite mais um numero")

if (numero > numero2 && numero > numero3){

    alert("o primeiro numero é o maior")

}else{

    if (numero2 > numero && numero2 > numero3)

        alert("o segundo numero é o maior")

}else{

    if (numero3 > numero && numero3 > numero2)

        alert("o terceiro é o maior")

}

exercicioDeRepetiçãoNivelIntermediario002()

}

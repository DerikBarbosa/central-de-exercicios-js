function exercicio01 () {

let num = prompt("digite um numero");

if (num > 0) { 

   console.log("positivo."); 


} else {

   if (numero < 0) {

       console.log("negativo.")


    } else {


           console.log("É zero.")


   }
}
    gerarlog("Exercicio de condicionais 01 executado." + new Date().toLocaleDateString());
}


function exercicio02 () {

    let idade = prompt("digite sua idade:");

    if (idade >= 18) {

        console.log("voce é maior de idade.")


    } else {

        console.log ("voce é menor de idade.")



    }


}



function exercicio03 () {


        let numero = prompt("insira um numero");


        if ( numero %2== 0) {


            alert("o numero é positivo")


        }else{



            alert("o numero é negativo")



        }


    }


    function exercicio04 () {

        let nota = prompt("insira a nota de um aluno: ");


        if (numero >= 60) {

            console.log("aprovado")


        } else {


            console.log ("reprovado")




        }

    }

    function exercicio05 () {

        let numero = prompt("digite um numero")

        if (numero >= 0) {

            alert("o numero é positivo");

        } else {
            ( numero <= 0) 

            console.log ("o numero é negativo")

        
    }

      }

    function exercicio06 () { 

        let numero = prompt("digite uma idade")

        if (numero >= 0 && idade <=12) {

            alert ("voce é criança")

        }else

            if (idade >=13 && idade <=17) { 

                alert("voce e um adulto")

            }else{

                if (idade >= 18) {

                    alert("voce e um adulto")

                }else{

                    alert ("idade invalida")


                }

    } 

}

        function intermediario01 () {

            let n1 = prompt ("digite um numero");   
            let n2 = prompt ("digite outro numero");
            let operacao = prompt ("digite a operacao");

            if (operacao == "+") {

                let resultado = n1 - n2;
                alert(resultado);

            }else if (operacao == "-") {

                let resultado = n1 - n2;
                alert(resultado);
            
            }else if (operacao == "*") {

                let resultado = n1 - n2;
                alert(resultado);   
                
            }else if (operacao == "/") {

                let resultado = n1 - n2;
                alert(resultado);    
            
            }
        }




























        function gerarlog (textoDoLog){


            let logsContainer = document.querySelector(".logs-container");

            let paragraph = document.createElement("p");

            paragraph.innerHTML = textoDoLog

            logsContainer.appendChild(paragraph); 



        }
const textOpt1 = document.getElementById("operador1")
const textOperacion = document.getElementById("tipoOperacion")
const textOpt2 = document.getElementById("operador2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click', calcular)

function calcular(){
    const operacion = textOperacion.value
    const operador1 = parseFloat(textOpt1.value)
    const operador2 = parseFloat(textOpt2.value)

    if((operacion == "+" || operacion == "*" 
    || operacion == "-" || operacion == "/")
    && !isNaN(operador1) && !isNaN(operador2)){
        let resultado;
        switch(operacion){
            case "+":
                resultado = operador1 + operador2
                break
            case "-":
                resultado = operador1 - operador2
                break
            case "/":
                resultado = operador1 / operador2
                break
            case "*":
                resultado = operador1 * operador2
                break
        }
        pResultado.style = "color:black"
        pResultado.innerText = "= " + resultado;
    }
        else{
            pResultado.style = "color:red"
            pResultado.innerText = "Operación inválida, corrija los valores ingresados"
        }
    } 
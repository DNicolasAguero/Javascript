let numero1 = prompt("Ingrese el primer numero");
let operacion = prompt("Seleccione la operacion matematica: + SUMA, - RESTA, x MULTIPLICACION, % DIVISION");
let numero2 = prompt("Ingrese el segundo numero");

function calcular(numero, numeroSeg, opcion) {
    switch (opcion) {
        case "+":
            return numero + numeroSeg;
        case "-":
            return numero - numeroSeg;
        case "x":
            return numero * numeroSeg;
        case "%":
            return numero / numeroSeg;
    }
}
let resultado = calcular(numero1, numero2, operacion);
alert("Resulado: " + resultado);
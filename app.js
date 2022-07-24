//variables
var operador_a;

var operador_b;

var operacion;


//funcion
function init(){
    var resultado = document.getElementById("resultado");
    var nueve = document.getElementById("nueve");
    var ocho = document.getElementById("ocho");
    var siete = document.getElementById("siete");
    var seis = document.getElementById("seis");
    var cinco = document.getElementById("cinco");
    var cuatro = document.getElementById("cuatro");
    var tres = document.getElementById("tres");
    var dos = document.getElementById("dos");
    var uno = document.getElementById("uno");
    var cero = document.getElementById("cero");
    var resta = document.getElementById("resta");
    var division = document.getElementById("division");
    var suma = document.getElementById("suma");
    var igual = document.getElementById("igual");
    var reset = document.getElementById("reset");

    //eventos
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }


    //reset boton
    reset.onclick = function(e){
        resetear();
    }
    //simbolos
    suma.onclick = function(e){
        operador_a = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operador_a = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    division.onclick = function(e){
        operador_a = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operador_a = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    //igual
    igual.onclick = function(e){
        operador_b = resultado.textContent;
        resolver();
    }

}


//metodos

function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    operador_a = 0;
    operador_b = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
    switch(operacion){
        case "+": res = parseFloat(operador_a) + parseFloat(operador_b); break;

        case "-": res = parseFloat(operador_a) - parseFloat(operador_b); break;

        case "*": res = parseFloat(operador_a) * parseFloat(operador_b); break;

        case "/": res = parseFloat(operador_a) / parseFloat(operador_b); break;
    }
    resetear();
    resultado.textContent = res
}

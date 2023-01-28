function encriptar(){
    var texto = document.getElementById("textLimpio").value.toLowerCase();

    var textLimpio = texto.replace(/e/img, "enter");
    var textLimpio = textLimpio.replace(/i/img, "imes");
    var textLimpio = textLimpio.replace(/a/img, "ai");
    var textLimpio = textLimpio.replace(/o/img, "ober");
    var textLimpio = textLimpio.replace(/u/img, "ufat");

    document.getElementById("resultado").innerHTML = textLimpio;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";  
}

function desencriptar(){
    var texto = document.getElementById("textLimpio").value.toLowerCase();

    var textLimpio = texto.replace(/enter/img, "e");
    var textLimpio = textLimpio.replace(/imes/img, "i");
    var textLimpio = textLimpio.replace(/ai/img, "a");
    var textLimpio = textLimpio.replace(/ober/img, "o");
    var textLimpio = textLimpio.replace(/ufat/img, "u");

    document.getElementById("resultado").innerHTML = textLimpio;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
}

function copiar(){
    var codigo = document.querySelector("#resultado");
    codigo.select();
    document.execCommand("copy");
}

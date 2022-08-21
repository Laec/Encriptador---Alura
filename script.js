const mensajeEntrada = document.querySelector(".mensaje");
const mensajeSalida = document.querySelector(".mensajeEncriptado");

function botonencriptar() {
    const mensajeEncriptado = encriptar(mensajeEntrada.value);
    mensajeSalida.value = mensajeEncriptado;
    mensajeSalida.style.backgroundImage = "none";
    mensajeEntrada.value = "";
}

function encriptar(mensajeOriginal) {
    var llaves = ["ai","enter","imes","ober","ufat"];
    var vocales = ["a","e","i","o","u"];
    var letra = "";
    var oracionEncriptada = "";

    mensajeMinuscula = mensajeOriginal.toLowerCase();

    for (let i = 0; i < mensajeMinuscula.length; i++) {

        letra = mensajeMinuscula[i]

                for (let j = 0; j < vocales.length; j++) {

                    if (letra == vocales[j]) {

                        letra = llaves[j];

                    }
                
                }
        oracionEncriptada = oracionEncriptada + letra 
        
    }
 
    return oracionEncriptada
}

function botondesencriptar() {
    const mensajeDesencriptado = desencriptar(mensajeEntrada.value);
    mensajeSalida.value = mensajeDesencriptado;
    mensajeSalida.style.backgroundImage = "none";
    mensajeEntrada.value = "";
}

function desencriptar(mensajeEncriptado) {
    var llaves = ["ai","enter","imes","ober","ufat"];
    var vocales = ["a","e","i","o","u"];

    for (let i = 0; i < llaves.length; i++) {
        
        while (mensajeEncriptado.includes(llaves[i])) {

            indice = mensajeEncriptado.indexOf(llaves[i]);
            mensajeArray = mensajeEncriptado.split("");
            eliminado = mensajeArray.splice(indice,llaves[i].length,vocales[i]);

            mensajeEncriptado = mensajeArray.join('');
        }        
        
    }

    return mensajeEncriptado
}

function copiar(){
    let mensajeCopiar = mensajeSalida;
    mensajeCopiar.select();
    document.execCommand("copy");
    mensajeSalida.value = ""
    mensajeSalida.style.backgroundImage = "url('Muñeco.png')";
}
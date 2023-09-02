const inputTexto = document.querySelector(".campo-input");
const outputTexto = document.querySelector(".campo-output");

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    outputTexto.value = textoEncriptado;
    outputTexto.style.backgroundImage="none";
    
    


}

function encriptar (stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesincriptado = desencriptar(outputTexto.value);
    outputTexto.value = textoDesincriptado;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
    return stringDesencriptada;
}


document.getElementById('clipboardcopy').addEventListener('click', clicboarCopy);
async function clicboarCopy() {
    let text = document.querySelector(".campo-output").value;
    await navigator.clipboard.writeText(text);
    alert("Texto copiado!");
}
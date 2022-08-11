const salida = (textoSalida) => {
    const divSalida = document.getElementById("divSalida");
    const salidaTemplate = document.getElementById("salidaTemplate");
    const clone = salidaTemplate.content.cloneNode(true);
    clone.querySelector(".salida-texto").textContent = textoSalida;
    divSalida.appendChild(clone)
}



// inputText = "gato "

const encriptar = () => {
    const texto = document.querySelector("#input-texto").value;

    arrayEncriptado = []

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] != "a" && texto[i] != "e" && texto[i] != "i" && texto[i] != "o" && texto[i] != "u") {
            arrayEncriptado.push(texto[i])
        }
        if (texto[i] == "a") {
            arrayEncriptado.push("ai")
        }
        if (texto[i] == "e") {
            arrayEncriptado.push("enter")
        }
        if (texto[i] == "i") {
            arrayEncriptado.push("imes")
        }
        if (texto[i] == "o") {
            arrayEncriptado.push("ober")
        }
        if (texto[i] == "u") {
            arrayEncriptado.push("ufat")
        }
    }
    console.log(arrayEncriptado)
    palabraEncriptada = arrayEncriptado.join("")

    salida(palabraEncriptada);

    document.querySelector("#input-texto").value = ""

}

const botonEncriptar = document.getElementById("botonEncriptar");

botonEncriptar.addEventListener("click", encriptar);

const desencriptar = (texto) => {

    const texto = document.querySelector("#input-texto").value;

    arrayDesencriptado = []

    for (let i = 0; i < texto.length; i++) {
        console.log(i)
        if (texto[i] != "a" && texto[i] != "e" && texto[i] != "i" && texto[i] != "o" && texto[i] != "u") {
            arrayDesencriptado.push(texto[i])
        }
        if (texto[i] == "a" && texto[i + 1] == "i") {
            arrayDesencriptado.push("a")
            console.log(arrayDesencriptado)
        }
        if (texto[i] == "e" && texto[i + 1] == "n" && texto[i + 2] == "t" && texto[i + 3] == "e" && texto[i + 4] == "r") {
            arrayDesencriptado.push("e")
            console.log(arrayDesencriptado)
        }
        if (texto[i] == "i" && texto[i + 1] == "m" && texto[i + 2] == "e" && texto[i + 3] == "s") {
            arrayDesencriptado.push("i")
            console.log(arrayDesencriptado)
        }
        if (texto[i] == "o" && texto[i + 1] == "b" && texto[i + 2] == "e" && texto[i + 3] == "r") {
            arrayDesencriptado.push("o")
            console.log(arrayDesencriptado)
        }
        if (texto[i] == "u" && texto[i + 1] == "f" && texto[i + 2] == "a" && texto[i + 3] == "t") {
            arrayDesencriptado.push("u")
            console.log(arrayDesencriptado)
        }

    }

    console.log(arrayDesencriptado)
    for (let i = arrayDesencriptado.length - 1; i >= 0; i--) {
        if (arrayDesencriptado[i - 2] == "n" && arrayDesencriptado[i - 1] == "t" && arrayDesencriptado[i] == "r") {
            arrayDesencriptado = arrayDesencriptado.slice(0, -3);
        }
        if (arrayDesencriptado[i - 1] == "m" && arrayDesencriptado[i] == "s") {
            arrayDesencriptado = arrayDesencriptado.slice(0, -2);
        }
        if (arrayDesencriptado[i - 1] == "b" && arrayDesencriptado[i] == "r") {
            arrayDesencriptado = arrayDesencriptado.slice(0, -2);
        }
        if (arrayDesencriptado[i - 1] == "f" && arrayDesencriptado[i] == "t") {
            arrayDesencriptado = arrayDesencriptado.slice(0, -2);
        }
    }

    palabraDesencriptada = arrayDesencriptado.join("")
    
    

}

const botonDesencriptar = document.getElementById("botonDesencriptar");

botonEncriptar.addEventListener("click", desencriptar);

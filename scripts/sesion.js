let usuario = document.getElementById("usuario"),
pass = document.getElementById("contraseña"),
botonlogear = document.getElementById("logear");

import { usuarioStorage, emailStorage, passwordStorage } from "./registro.js"

let revisar = () => {
    if ( usuario.value = usuarioStorage.value ) {
        alert("Correcto");
    }
    else {
        alert ("Usuario incorrecto");
    }
}

botonlogear.addEventListener("click", revisar);
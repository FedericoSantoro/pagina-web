const email = document.getElementById("email"),
  usuario = document.getElementById("usuario"),
  pass = document.getElementById("contraseña"),
  botonenviar = document.getElementById("boton-enviar");

let comprobar = () => {
    if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email.textContent) ) {
        console.log ("El mail es correcto");
    }
    else {
        alert("El mail es incorrecto, vuela a ingresarlo");
        event.preventDefault();
    }
    if ( usuario.textContent.length > 6 && usuario.textContent.length < 20 ) {
        console.log ("El usuario es correcto");
    }
    else {
        alert("El usuario es incorrecto, vuela a ingresarlo");
        event.preventDefault();
    }
    if ( pass.textContent.length >= 4 && pass.textContent.length <= 10 ) {
        console.log ("La contraseña es correcta");
    }
    else {
        alert("La contraseña es incorrecta, vuela a ingresarla");
        event.preventDefault();
    }
}

botonenviar.addEventListener("click", comprobar)

//email.addEventListener("focusout", comprobarMail);
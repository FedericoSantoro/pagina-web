const email = document.getElementById("email"),
  usuario = document.getElementById("usuario"),
  pass = document.getElementById("contraseña"),
  botonenviar = document.getElementById("boton-enviar");

const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

let comprobar = () => {
  if (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email.value)) {
    console.log("El mail es correcto");
  } else {
    alert("El mail es incorrecto, vuela a ingresarlo");
    event.preventDefault();
  }
  if (usuario.value.length > 6 && usuario.value.length < 20) {
    console.log("El usuario es correcto");
  } else {
    alert("El usuario es incorrecto, vuela a ingresarlo");
    event.preventDefault();
  }
  if (pass.value.length >= 4 && pass.value.length <= 10) {
    console.log("La contraseña es correcta");
  } else {
    alert("La contraseña es incorrecta, vuela a ingresarla");
    event.preventDefault();
  }
  let usuarioStorage = window.localStorage.setItem("usuario", usuario.value),
    emailStorage = window.localStorage.setItem("email", email.value),
    passwordStorage = window.localStorage.setItem("password", pass.value);
};

botonenviar.addEventListener("click", comprobar);

export { usuarioStorage, emailStorage, passwordStorage };
//email.addEventListener("focusout", comprobarMail);

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {});

function verificar() {
  let dato = document.getElementById("u");
  let pass = document.getElementById("p");
  let msj = document.getElementById("msj");
  let usuario = {};

  if (dato.value.trim() === "" || pass.value.trim() === "") {
    dato.classList.add("isInvalid") || pass.classList.add("isInvalid") ;
    msj.innerHTML = "Dato requerido";
    msj.style.color = "red";
    msj.style.display = "block";
  } else {
    location.href = "principal.html";

    usuario.nombre = dato.value;
    usuario.estado = "conectado";

    
  }
}
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();

  /*console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());*/

  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
  location.href = "principal.html"; }

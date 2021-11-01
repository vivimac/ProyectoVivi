function previewFile() {
  let preview = document.getElementById('foto');
  let file    = document.querySelector('input[type=file]').files[0];
  let reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;     
  }

  if (file) {
    reader.readAsDataURL(file);
   
  } else {
    preview.src = "img/perfil.png";
  }
}
function guardar() {
  let preview = document.getElementById('foto');
  let perfil = {};
  perfil.imagen = preview.src
  perfil.username = document.getElementById("username").value;
  perfil.password = md5(document.getElementById("pass").value);
  perfil.name = document.getElementById("name").value;
  perfil.apellido = document.getElementById("ape").value;
  perfil.edad = document.getElementById("age").value;
  perfil.tel = document.getElementById("tel").value;
  perfil.email = document.getElementById("email").value;
  perfil.direcccion = document.getElementById("direc").value;

  localStorage.setItem("perfil", JSON.stringify(perfil));
  alert ( "Perfil guardado correctamente")

}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", ()=> {
let perfil = JSON.parse(localStorage.getItem("perfil"));
let preview = document.getElementById('foto');
if (perfil != null){

document.getElementById('foto').src = perfil.imagen;
document.getElementById("username").value=  perfil.username;
document.getElementById("pass").value=  perfil.password;

document.getElementById("name").value=  perfil.name;
document.getElementById("ape").value=  perfil.apellido;                         
document.getElementById("age").value=  perfil.edad;
document.getElementById("tel").value=  perfil.tel;
document.getElementById("email").value=  perfil.email;
document.getElementById("direc").value=  perfil.direcccion;

}else {
  preview.src = "img/perfil.png";
}
});
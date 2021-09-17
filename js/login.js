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

    usuario.nombre = dato.value;
    //usuario.estado = "conectado";
    localStorage.setItem('usuario',JSON.stringify(usuario));
    sessionStorage.setItem('usuario',JSON.stringify(usuario));
    
    location.href = "principal.html";

  }}


  document.addEventListener('DOMContentLoaded', ()=>{
    let usuario = JSON.parse( localStorage.getItem("usuario"));
        document.getElementById("nombre").innerHTML=  usuario.nombre;
});

function desconectar(){
localStorage.clear(); 
location.href="index.html"; 
}

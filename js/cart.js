let carrito={}

function showCart(lista){
let tabla="";
for (let i = 0; i < lista.articles.length; i++) {
let article = lista.articles[i];
if(article.currency == "UYU"){
       article.currency = "USD";
       article.unitCost=article.unitCost/40;                  
} 

tabla += `
<div class="table container mb-3" >
<table class="table table-bordered">
  
<thead class="table-dark text-center row-md-4">
  <tr>
  <th class="mb-3" style="width:200px"><button class="btn-danger float-left" id="borrar" onclick="eliminar(${i})" style="border-radius: 5px; "><i class="fas fa-trash-alt"></i></button>
  <h4><b>` +   article.name + `</h4></b></th>
  <th class="  mb-3" style="width:100px ">Cantidad</th>
  <th class="mb-3" style="width:100px">Costo unitario</th>
  <th class="mb-3" style="width:100px"> Sub Total </th>
  
</tr>
</thead> 

<tbody class="text-center" >
<td class="mb-3" ><img src="` + article.src + `" style="width:150px">
</td>
<td class="mb-3" ><input class="text-center" id='cant${i}' onchange='totales()' type="number" min=1 max=50 value=1 style="font-size:6mm">
</td>
<td class="  mb-3" id="precio" style="font-size:25px"> ` + article.currency + ` <span class="price">  ` + article.unitCost +  `</span></td>
<td id='sub${i}' class=" mb-3" style="font-size:35px "></td>

</tbody>

</table>

 </div> 
</div>`;  
};

document.getElementById("listaCarrito").innerHTML = tabla;
totales()
}

function totales(){
    let precios = document.getElementsByClassName('price'); 
    let cantidades = document.getElementsByTagName('input');

    let envio = document.getElementsByName("envio");
    let costoenvio = 0;

    let subtotal= 0;
    let total= 0;
    
    for (let i=0; i< precios.length; i++){
      
        subtotal+= parseFloat(precios[i].innerHTML) * parseFloat(cantidades[i].value) ;
        document.getElementById('sub'+i).innerHTML = parseFloat(precios[i].innerHTML) * parseFloat(cantidades[i].value);
    }
    document.getElementById('subtotalFinal').innerHTML=(subtotal).toLocaleString('de-DE');

    //premium
    if(envio[0].checked){
    costoenvio = (subtotal * 0.15).toFixed(2)
    document.getElementById("tipodeenvio").innerText= costoenvio
    }
    //express
    if(envio[1].checked){
    costoenvio = (subtotal * 0.07).toFixed(2)
    document.getElementById("tipodeenvio").innerText= costoenvio
    }
    //standar
    if(envio[2].checked){
    costoenvio = (subtotal * 0.05).toFixed(2)
    document.getElementById("tipodeenvio").innerText= costoenvio
    }
    
    document.getElementById('tipodeenvio').innerHTML= (costoenvio).toLocaleString('de-DE');
   
    total = (parseFloat(subtotal) + parseFloat(costoenvio)).toLocaleString('de-DE');

    document.getElementById('totalCost').innerHTML=(total).toLocaleString('de-DE');

}

function eliminar(i) {
    carrito.articles.splice(i, 1);
    if (carrito.articles.length >=1){
        showCart(carrito);
        totales()
    } else {
        document.getElementById("listaCarrito").innerHTML = '<h3>No hay articulos en su carrito</h3>;'
    totales()
    }
    }


function comprar(){
   /* let formadepago = document.getElementsByClassName('pago'); 
    let tipoenvio = document.getElementsByTagName('envio');
       
        let msj = document.getElementById("msj");
    
        if (tipoenvio.value.trim() === "" || formadepago.value.trim() === "") {
          tipoenvio.classList.add("isInvalid") || formadepago.classList.add("isInvalid") ;
          msj.innerHTML = "Dato requerido";
          msj.style.color = "red";
          msj.style.display = "block";
      
        } else {*/

    Swal.fire({
      position: 'middle',
      html: '<lottie-player src="https://assets2.lottiefiles.com/packages/lf20_4eth4jy9.json"  background="transparent"  speed="1"  style="width: 450px; height: 450px;"    autoplay></lottie-player>',
      title: 'Su compra se ejecutó exitosamente, GRACIAS!',
      showConfirmButton: false,
      timer: 2500
    }) }  
//}


document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(CART_INFO_NEW_URL).then(function(resultObj){
        if(resultObj.status === 'ok'){ 
            carrito = resultObj.data;
            showCart(carrito);
        }
    })






});

      
                       
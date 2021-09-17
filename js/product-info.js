//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function (e) {

  // Obtengo los datos json de la info
  getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      productInfo = resultObj.data;

      let productNameHTML = document.getElementById("productName");
      let productDescriptionHTML =
        document.getElementById("productDescription");
      let productCostHTML = document.getElementById("productCost");
      let productSoldCountHTML = document.getElementById("productSoldCount");
      //let productRelaHTML = document.getElementById("productRela");

      productNameHTML.innerHTML = productInfo.name;
      productDescriptionHTML.innerHTML = productInfo.description;
      productCostHTML.innerHTML =  productInfo.currency + productInfo.cost ;
      productSoldCountHTML.innerHTML = productInfo.soldCount;
      //productRelaHTML.innerHTML = productInfo.relatedProducts;

      showProductsInfo(productInfo.images);
    }
  });

  // Obtengo los datos json de los comentarios
  getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      commentsArray = resultObj.data;
      showProductsComments(commentsArray);
    }
  });
});



// Muestra la info
function showProductsInfo(array) {
  let htmlContentToAppend = "";

  for (let i = 0; i < array.length; i++) {
    let imageSrc = array[i];

    htmlContentToAppend +=
      `        <div class="col-lg-3 col-md-5 col-6">
        <div class="d-block mb-4 h-100">
        <img class="img-fluid img-thumbnail" src="` +
      imageSrc +
      `" alt="">
            </div>
        </div>
        `;
    document.getElementById("productImages").innerHTML = htmlContentToAppend;
  }
}

// Muestra los comentarios
function showProductsComments(comment) {
  let htmlContentToAppend = "";

  for (comment of commentsArray) {
    htmlContentToAppend +=
      `
      <div>
      <small class="text-lg-left"> ` +
      comment.dateTime +
      ` </small><p style="color: darkorange;">` +
      estrellitas(comment.score) +
      `</p>
      <b><h5> ` +
      comment.user +
      `</b></h5>
      <p>` +
      comment.description +
      `</p><br>
      </div> `;

    document.getElementById("comentarios").innerHTML = htmlContentToAppend;
  }
}

// ESTRELLAS CALIFICACION
function estrellitas(score) {
  let estrellas = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= score) {
      estrellas += '<i class="fas fa-star "></i>'; //Pongo una estrellita llena
    } else {
      estrellas += '<i class="far fa-star "></i>'; //Pongo el contorno
    }
  }
  return estrellas;
}

// USUARIO
document.addEventListener("DOMContentLoaded", () => {
  let usuario = JSON.parse(localStorage.getItem("usuario"));
  document.getElementById("nombre").innerHTML = usuario.nombre;
});

function desconectar() {
  localStorage.clear();
  location.href = "index.html";
}

//   AGREGAR COMENTARIO
document.getElementById("agregar").addEventListener("click", () => {
  let comenta = {};
  let name = JSON.parse(localStorage.getItem("usuario"));
  comenta.user = name.nombre
  comenta.description = document.getElementById("newComment").value;
  comenta.score = document.getElementById("puntuacion").value;
  comenta.dateTime = document.getElementById("fecha").value;

  if (
    comenta.description.trim() == "" ||
    comenta.score.trim() == "" ||
    comenta.dateTime.trim() == ""
  ) {
    alert("Debe ingresar todos los datos");
  } else {
    commentsArray.push(comenta);
  }
  showProductsComments(comenta);
  document.getElementById("puntuacion").value = "";
  document.getElementById("newComment").value = "";
});

//   VACIAR CAMPOS NUEVO COMENTARIO
document.getElementById("borrar").addEventListener("click", function () {
  document.getElementById("puntuacion").value = "";
  document.getElementById("newComment").value = "";
  document.getElementById("fecha").value = " ";
  showProductsComments(commentsArray);
});



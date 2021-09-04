let productsArray = [];

function showProductsList(array) {
  let htmlContentToAppend = "";
  for (let i = 0; i < array.length; i++) {
    let product = array[i];

    htmlContentToAppend +=
      `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` +
      product.imgSrc +
      `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1"><b>` +
      product.name +
      ` </h4></b> 
                     </div>
                   <p class="d-flex w-100 justify-content-between">` +
      product.description +
      `<p> 
                </div>
                    <class="text-muted mb-1"><b> ` +
      product.currency +
      `  ` +
      product.cost +
      `</b></>
            </div>
                    <small class="text-muted">` +
      product.soldCount +
      ` artículos vendidos </small>
        </div> 
        `;

    document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(PRODUCTS_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      productsArray = resultObj.data;
      showProductsList(productsArray);
    }
  });
});

 
document.getElementById("filtro").addEventListener("click", function() { 
  maxPrice= document.getElementById("maximo").value;
  minPrice = document.getElementById("minimo").value;
  })

document.getElementById("ascendente").addEventListener("click",() => { 
  ordenarAscendente(); })

document.getElementById("descendente").addEventListener("click",() => {
  ordenarDescendente(); })

  document.getElementById("rele").addEventListener("click",() => {
    ordenarRelevancia(); })

function ordenarPrecio(){
  productsArray.sort((a,b)=> {
    if (a.cost > b.cost){
      return 1; }
if(a.cost < b.cost){
  return -1;}
else{return 0}
});
showProductsList(productsArray)
}

function ordenarAscendente(){
let ordenado=[]
ordenarPrecio(productsArray);
showProductsList(ordenado);

}

function ordenarDescendente(){
  let ordenado=[]
  ordenarPrecio(productsArray);
  ordenado = productsArray.reverse()
  showProductsList(ordenado);
  
  }

  
function ordenarRelevancia(){
    productsArray.sort((a,b)=> {
      if (a.soldCount > b.soldCount){
        return -1; }
  if(a.soldCount < b.soldCount){
    return 1;}
  else{return 0}
  });
  showProductsList(productsArray)
  }

function Relevancia(){
    let ordenado=[]
    ordenarRelevancia(productsArray);
    showProductsList(ordenado); 
  }
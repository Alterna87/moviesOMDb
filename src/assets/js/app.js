// Todo manejo del DOM
// todos los nodos del DOM son const
const input = document.querySelector('input'); // Queryselector seleccionara el primer input
input.addEventListener('keypress', (event) => {
  let key = event.which || event.keyCode; // para recolectar la tecla presionada
  if (key === 13) {
    let movie = input.value;
    // console.log(movie);
    input.value = '';
    getData(movie);

  };

});
//
const renderInfo = response => {
let info = document.getElementById('info');
info.innerHTML = '';
let search = response.Search;
let image;
for (let i = 0; i < search.length; i++) {

  if (search[i].Poster != 'N/A') {
    images =search[i].Poster
  } else {
    images = '';
  }
  info.innerHTML += `
  <div class="col-md-4">
  <div class='card text-white bg-dark' style='width: 18rem;'>
  <img class='card-img-top' src='${images}' alt='Card image cap'>
  <div class='card-body'>
    <h5 class='card-title'>${search[i].Title}</h5>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target='#${search[i].imdbID}'>
Ver Mas...
</button>
  </div>
  </div>
</div>

<div class="modal fade" id='${search[i].imdbID}' tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${search[i].Title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <img src='${images}'/>
      <p>Año: ${search[i].Year}</p>
      <p>Tipo: ${search[i].Type}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss='modal'>Aceptar</button>
      </div>
    </div>
  </div>
</div>`;
}

};

// Mandar la informacion de la pelicula, titulo, año duración y la imagen

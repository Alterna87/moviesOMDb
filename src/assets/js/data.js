window.getData =(movie)=> {
fetch(`http://www.omdbapi.com/?s=${movie}&apikey=64f99355`)
.then(response => response.json())
.then(data => {
  // función para pintar el DOM
renderInfo(data);

console.log(data);


}) .catch (error => error);


};

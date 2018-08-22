window.getData =(movie)=> {
fetch(`http://www.omdbapi.com/?s=${movie}&apikey=64f99355`)
.then(response => response.json())
.then(data => {
renderInfo(data);

console.log(data);


}) .catch (error => error);


};

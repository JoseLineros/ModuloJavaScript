console.log(document.getElementById('botonNo').style.cssText);

console.log(Math.floor(Math.random() * 100));

const botonNo = document
	.getElementById('botonNo')
	.addEventListener('mouseover', noQuiero);

function noQuiero() {
	let random = Math.floor(Math.random() * 400);
	document.getElementById('botonNo').style.cssText = `margin:${random}px;`;
	return random;
}

const siQuiero = () => {
	document.getElementById(
		'cardContainer'
	).innerHTML += `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
};

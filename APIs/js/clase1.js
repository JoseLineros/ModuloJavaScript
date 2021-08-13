// API
function cantidadPersonajes() {
	console.log('Hola');

	let numeroPersonajes = parseInt(
		document.getElementById('NumeroPersonajes').value
	);
	console.log(numeroPersonajes);
	if (numeroPersonajes == 0) {
		document.getElementById(
			'cardsContainer'
		).innerHTML = `<div class="alert alert-primary w-100" role="alert">
            Ingrese un numero distinto de cero
          </div>`;
		return;
	}

	if (isNaN(numeroPersonajes)) {
		alert('error');
	}

	document.getElementById('cardsContainer').innerHTML = '';

	for (let i = 1; i <= numeroPersonajes; i++) {
		let url = `https://rickandmortyapi.com/api/character/${i}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => print(data))
			.catch((error) => console.log(error));
	}
}

const main = async () => {
	for (let i = 1; i <= 50; i++) {
		let url = `https://rickandmortyapi.com/api/character/${i}`;
		await fetch(url)
			.then((res) => res.json())
			.then((data) => print(data))
			.catch((error) => console.log(error));
	}
};

const print = (data) => {
	console.log(data);
	let card = `<div class="card m-2" style="width: 18rem;">
        <img src="${data.image}" class="card-img-top" alt=".">
        <div class="card-body">
            <small>${data.id}</small>
            <h4>${data.name}</h4>
            <p><b>Especie : </b>${data.species}</p>
            <p><b>Origin : </b>${data.origin.name}</p>
        </div>
    </div>`;

	document.getElementById('cardsContainer').innerHTML += card;
};

// main();

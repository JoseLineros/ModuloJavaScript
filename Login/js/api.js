let errores = document.getElementById('errores');

function cantidadPersonajes() {
	console.log('Personajes');
	let numeroPersonajes = parseInt(
		document.getElementById('inputCantidad').value
	);
	// console.log(inputCantidad);
	if (
		numeroPersonajes === '' ||
		numeroPersonajes == 0 ||
		isNaN(numeroPersonajes)
	) {
		errores.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Escriba un numero para mostrar cantidad de personajes!</strong>.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
		limpiar();
		myAlertTop();
		return;
	}

	// if (isNaN(numeroPersonajes)) {
	// 	errores.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
	//     <strong>Caracter no valido!</strong>.
	//     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
	//   </div>`;

	// 	myAlertTop();
	// 	return;
	// }

	document.getElementById('contenedorPersonajes').innerHTML = '';

	for (let i = 1; i <= numeroPersonajes; i++) {
		let url = `https://rickandmortyapi.com/api/character/${i}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => printPersonajes(data))
			.catch((error) => console.log(error));
	}
}

const printPersonajes = (data) => {
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

	document.getElementById('contenedorPersonajes').innerHTML += card;
};

function todos() {
	console.log('all');

	document.getElementById('contenedorPersonajes').innerHTML = '';

	let url = `https://rickandmortyapi.com/api/character/`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => print(data))
		.catch((error) => console.log(error));
}

const print = (datos) => {
	console.log(datos.results);

	let card;

	for (let data of datos.results) {
		console.log(data);

		card = `<div class="card m-2" style="width: 18rem;">
        <img src="${data.image}" class="card-img-top" alt=".">
            <div class="card-body">
                <small>${data.id}</small>
                <h4>${data.name}</h4>
                <p><b>Especie : </b>${data.species}</p>
                <p><b>Origin : </b>${data.origin.name}</p>
            </div>
        </div>`;

		document.getElementById('contenedorPersonajes').innerHTML += card;
	}
};

function especifico() {
	console.log('especifico');

	let numeroPersonaje = parseInt(
		document.getElementById('inputCantidad').value
	);

	if (
		numeroPersonaje === '' ||
		numeroPersonaje == 0 ||
		isNaN(numeroPersonaje)
	) {
		errores.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Escriba un numero de personaje para buscar!</strong>.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
		limpiar();
		myAlertTop();
		return;
	}

	document.getElementById('contenedorPersonajes').innerHTML = '';

	let url = `https://rickandmortyapi.com/api/character/${numeroPersonaje}`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => printEspecifico(data))
		.catch((error) => console.log(error));
}

const printEspecifico = (data) => {
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

	document.getElementById('contenedorPersonajes').innerHTML += card;
};

function myAlertTop() {
	document.getElementById('errores').style.display = 'block';
	setTimeout(function () {
		document.getElementById('errores').style.display = 'none';
	}, 2000);
}

const limpiar = () => {
	document.getElementById('contenedorPersonajes').innerHTML = '';
	document.getElementById('inputCantidad').value = '';
};

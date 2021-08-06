// const nombre = (num1, num2) => {
// 	console.log(`${num1} ${num2}`);

// 	if (valor) {
// 		return 'Esta';
// 	} else {
// 		return 'No esta';
// 	}
// };
// nombre(1, 2);
// retorno(10);

// const retorno = (valor) => {
// 	console.log(valor);
// };

const leerDatos = () => {
	let numTarjetas = document.getElementById('numCards').value;
	// console.log(numTarjetas);
	let resultado = verificador(numTarjetas);

	if (isNaN(resultado)) {
		alert(resultado);
	} else {
		generarTarjetas(resultado);
	}
};

const verificador = (numTarjetas) => {
	if (numTarjetas === '') {
		return 'Debes ingresar un numero';
	}

	// if (isNaN(numTarjetas)) {
	// 	return 'Esto no es un numero';
	// } else {
	// 	return parseInt(numTarjetas);
	// }

	return isNaN(numTarjetas) ? 'Esto no es un numero' : parseInt(numTarjetas);
};

const generarTarjetas = (num) => {
	// console.log(num);
	const card = `<div class="card text-white bg-primary m-3" style="max-width: 18rem">
        <div class="card-header">Header</div>
        <div class="card-body">
            <h5 class="card-title">Primary card title</h5>
            <p class="card-text">
                Some quick example text to build on the card title and
                make up the bulk of the card's content.
            </p>
        </div>
    </div>`;

	let contenidoAlDiv = '';

	for (let i = 1; i <= num; i++) {
		contenidoAlDiv += card;
	}

	document.getElementById('cardContainer').innerHTML = contenidoAlDiv;
};

let x = 10;

const p = new Promise((resolve, reject) => {
	if (x == 10) {
		resolve('La variable es igual a 10');
	} else {
		reject('la variable no es igual a 10');
	}
});

p.then((res) => {
	console.log('Exito ' + res);
}).catch((error) => {
	console.log('error', error);
});

// #############################################

const primero = (suma) => {
	return new Promise((resolve, reject) => {
		if (suma > 10) {
			resolve('La suma es mayor a diez');
		} else {
			reject('La suma es menor que diez');
		}
	});
};

primero(2 + 10)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});

// #############################################

const datos = [
	{ id: 1, nombre: 'Nombre1' },
	{ id: 2, nombre: 'Nombre2' },
];

const getPosts = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(datos);
		}, 1500);
	});
};

getPosts().then((datos) => console.log(datos));

const suma = (suma) => {
	return new Promise((resolve, reject) => {
		if (suma > 10) {
			resolve('La suma es mayor a diez');
		} else {
			reject('La suma es menor a diez');
		}
	});
};

const operaciones = async () => {
	let op = await suma(12 + 5);
	console.log('Resulto ');
	return op;
};

operaciones()
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(error);
	});

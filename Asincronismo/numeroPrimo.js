// Una persona necesita saber atravez de una promesa si un numero es primo o no es primo

// En caso de resolverse la promesa debera responder con un objeto {message: "Es primo", numero: <numero enviado>}
// En caso de rechazar la promesa debera responder con un objeto {message: "No es primo", numero: <numero enviado>}

/* ##################################################################
NUMEROS PRIMOS
################################################################## */
// let num = 9;
// let esPrimo = true;

// for (let i = 2; i < num; i++) {
// 	if (num % i == 0) {
// 		esPrimo = false;
// 	}
// }
// if (esPrimo) {
// 	console.log('Es Primo');
// } else {
// 	console.log('No es primo');
// }

/* ##################################################################
Solucion con promise
################################################################## */
// const promesa = (num) => {
// 	return new Promise((resolve, reject) => {
// 		let esPrimo = true;
// 		if (num < 2) primo = false; //return false;
// 		for (let i = 2; i < num; i++) {
// 			if (num % i == 0) {
// 				esPrimo = false;
// 			}
// 		}
// 		if (esPrimo) {
// 			return resolve({ message: 'Es primo', numero: `${num}` });
// 		} else {
// 			return resolve({ message: 'No es primo', numero: `${num}` });
// 		}
// 	});
// };

// promesa(2)
// 	.then((res) => console.log(res))
// 	.catch((err) => console.log(err));

/* ##################################################################
Solucion con async
################################################################## */
function esPrimo(num) {
	return new Promise((resolve, reject) => {
		let primo = true;
		if (num < 2) primo = false; //return false;
		for (let i = 2; i < num; i++) {
			if (num % i == 0) {
				primo = false; //return false;
			}
		}

		if (primo) {
			resolve({ message: 'Es primo', numero: `${num}` });
		} else {
			reject({ message: 'No es primo', numero: `${num}` });
		}

		return primo; // return true;
	});
}

const operaciones = async () => {
	let op = await esPrimo(2);
	console.log('Resulto ');
	return op;
};

operaciones()
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});

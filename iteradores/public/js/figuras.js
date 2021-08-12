//* Cuadrado
let cuadrado = '';
for (let m = 0; m < 8; m++) {
	for (let n = 0; n < 8; n++) {
		cuadrado += '*';
	}
	cuadrado += '\n';
}
console.log(cuadrado);
console.log('------------------');

//*Cuadrado sin centro
let cuadradoSin = '';
for (let o = 1; o <= 8; o++) {
	for (let p = 1; p <= 8; p++) {
		if (o == 1 || o == 8 || p == 1 || p == 8) {
			cuadradoSin += '*';
		} else {
			cuadradoSin += ' ';
		}
	}
	cuadradoSin += '\n';
}
console.log(cuadradoSin);
console.log('------------------');

//*Carita feliz
let cara1 = '';
for (let row1 = 1; row1 <= 8; row1++) {
	for (let col1 = 1; col1 <= 8; col1++) {
		//! Version inicial
		if ((col1 == 4 || col1 == 5) && row1 == 1) {
			cara1 += ' * ';
		} else {
			cara1 += ' ';
		}
		if (row1 == 2 || row1 == 3) {
			cara1 += ' ';
		}
		if (col1 == 1 && row1 == 4) {
			cara1 += '*';
		}
		if (row1 == 5 && (col1 == 3 || col1 == 4 || col1 == 5)) {
			cara1 += '*';
		}
		if (col1 == 8 && row1 == 4) {
			cara1 += '*';
		}
	}
	cara1 += '\n';
}
console.log(cara1);

let cara2 = '';
for (let row2 = 1; row2 <= 8; row2++) {
	for (let col2 = 1; col2 <= 8; col2++) {
		//! Version final
		if (
			(row2 == 7 && col2 == 2) ||
			(row2 == 8 && col2 == 3) ||
			(row2 == 3 && col2 == 4) ||
			(row2 == 3 && col2 == 6) ||
			(row2 == 9 && col2 == 4) ||
			(row2 == 9 && col2 == 5) ||
			(row2 == 9 && col2 == 6) ||
			(row2 == 8 && col2 == 7) ||
			(row2 == 7 && col2 == 8)
		) {
			cara2 += '*';
		} else {
			cara2 += ' ';
		}
	}
	cara2 += '\n';
}
console.log(cara2);

/* Ejercicios */
let figura1 = '';
for (let i = 0; i < 8; i++) {
	for (let j = 0; j < i; j++) {
		figura1 += '*';
	}
	figura1 += '\n';
}
console.log(figura1);
console.log('------');

let figura2 = '';
for (let i = 0; i < 8; i++) {
	for (let j = 0; j < 8 - i; j++) {
		figura2 += '*';
	}
	figura2 += '\n';
}
console.log(figura2);
console.log('------');

let figura3 = '';
for (let i = 0; i < 8; i++) {
	for (let j = 8 - i; j > 0; j--) {
		figura3 += ' ';
	}
	for (let j = 0; j < i; j++) {
		figura3 += '*';
	}
	figura3 += '\n';
}
console.log(figura3);
console.log('------');

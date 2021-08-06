//* Tablas de multiplicar
console.log('%c Tablas de multiplicar!', 'background: #222; color: #bada55');

let tablasMultiplicar = document.getElementById('tablasMultiplicar');

for (let i = 1; i <= 10; i += 1) {
	console.log('============');
	for (let j = 1; j <= 10; j++) {
		tablasMultiplicar.innerHTML += `${j} * ${i} = ${i * j} <br>`;
		console.log(`${i} * ${j} = ${i * j}`);
	}
	tablasMultiplicar.innerHTML += `<hr>`;
	console.log('============');
}

// for (let i = 1; i <= 10; i += 1) {
// 	for (let j = 1; j <= 3; j++) {
// 		tablas = j * i;
// 		tablasMultiplicar.innerHTML += j + 'x' + i + '=' + tablas + '<br>';
// 		console.log(`${j} x ${i} = ${tablas}`);
// 	}
// }

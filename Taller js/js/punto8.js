function identificarNumeros() {
    const inputElement = document.getElementById('numeros');
    const resultadoElement = document.getElementById('resultado');
    const numeros = inputElement.value.split(',').map(number => number.trim());
    resultadoElement.innerHTML = '';
    numeros.forEach(numero => {
        const num = parseFloat(numero);
        if (isNaN(num) || !Number.isInteger(num)) {
            resultadoElement.innerHTML += `${numero} no es un número entero<br>`;
        } else if (num % 2 === 0) {
            resultadoElement.innerHTML += `${num} es número par<br>`;
        } else {
            resultadoElement.innerHTML += `${num} es número impar<br>`;
        }
    });
    if (numeros.some(numero => isNaN(parseFloat(numero)))) {
        resultadoElement.innerHTML += '...No te deseo mal, pero ojalá te salga una oreo sin cremita.';
    }
}

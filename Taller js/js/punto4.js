function calcularPromedio() {
    var nombre = document.getElementById("nombre").value;
    var materia = document.getElementById("materia").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    var promedio = (nota1 + nota2 + nota3) / 3;

    var resultadoElement = document.getElementById("resultado");

    if (promedio >= 3.0) {
        resultadoElement.innerHTML = "Felidades, " + nombre + ", tu nota es " + promedio.toFixed(2) + ", pasaste la materia " + materia + " y todavía tienes futuro :D";
        resultadoElement.style.color = "green";
    } else {
        resultadoElement.innerHTML = "Lo siento, " + nombre + ", tu nota es " + promedio.toFixed(2) + "... Reprobaste " + materia + ", creo que te irá mejor en el bote.";
        resultadoElement.style.color = "red";
    }
}

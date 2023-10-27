function verificarEdad() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    if (isNaN(edad) || parseInt(edad) != parseFloat(edad) || edad < 0) {
      document.getElementById("resultado").innerHTML = "¿Te crees chistosito, verdad? Anda e ingresa una válida.";
    } else if (parseInt(edad) >= 18) {
      document.getElementById("resultado").innerHTML = "Hola, " + nombre + ", eres legal :0";
    } else {
      document.getElementById("resultado").innerHTML = "Hola, " + nombre + ", no eres legal :(";
    }
  }

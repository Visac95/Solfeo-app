var clave = "F"; //G F C3raLinea C4taLinea
var actual8va = 4;

function eligio(btn) {
  cambiaColor(btn);
  var notaActualNombre = notas["nota" + notaActual].nombre;
  console.log(notaActualNombre, btn.innerHTML);
  if (btn.innerText === notaActualNombre) {
    playNota(notaActualNombre + notas["nota" + notaActual].octava);
    cambioColorNota("var(--verde)");
  } else {
    playNota(btn.innerText + "4");
    console.log("¡Incorrecto!");
    cambioColorNota("var(--rojo)");
  }
  try {
    notaActual++;
    let valorActual =
      parseInt(notas["nota" + notaActual].obj.style.left, 10) + 10; // 1️⃣ Convertir "100px" a número
    lineaVPentagrama.style.left = valorActual + "px"; // 3️⃣ Asignamos de nuevo con 'px'
    //console.log(notas["nota" + notaActual].nombre);
  } catch (error) {
    console.log("Nuevas notas");
    limpiarNotas();
  }
}

// Función para obtener la notación musical según la posición
function notacionAm(posicion) {
  if (clave == "G") {
    switch (posicion) {
      case -46:
        actual8va = "5";
        return "A";
      case -29:
        actual8va = "5";
        return "G";
      case -12:
        actual8va = "5";
        return "F";
      case 5:
        actual8va = "5";
        return "E";
      case 22:
        actual8va = "5";
        return "D";
      case 39:
        actual8va = "5";
        return "C";
      case 57:
        actual8va = "4";
        return "B";
      case 74:
        actual8va = "4";
        return "A";
      case 93:
        actual8va = "4";
        return "G";
      case 109:
        actual8va = "4";
        return "F";
      case 127:
        actual8va = "4";
        return "E";
      case 145:
        actual8va = "4";
        return "D";
      case 162:
        actual8va = "4";
        return "C";
      default:
        return "Desconocida";
    }
  } else if (clave == "F") {
    switch (posicion) {
      case -46:
        actual8va = "4";
        return "C";
      case -29:
        actual8va = "3";
        return "B";
      case -12:
        actual8va = "3";
        return "A";
      case 5:
        actual8va = "3";
        return "G";
      case 22:
        actual8va = "3";
        return "F";
      case 39:
        actual8va = "3";
        return "E";
      case 57:
        actual8va = "3";
        return "D";
      case 74:
        actual8va = "3";
        return "C";
      case 93:
        actual8va = "2";
        return "B";
      case 109:
        actual8va = "2";
        return "A";
      case 127:
        actual8va = "2";
        return "G";
      case 145:
        actual8va = "2";
        return "F";
      case 162:
        actual8va = "2";
        return "E";
      default:
        return "Desconocida";
    }
  } else if (clave == "C3raLinea") {
    switch (posicion) {
      case -46:
        actual8va = "4";
        return "B";
      case -29:
        actual8va = "4";
        return "A";
      case -12:
        actual8va = "4";
        return "G";
      case 5:
        actual8va = "4";
        return "F";
      case 22:
        actual8va = "4";
        return "E";
      case 39:
        actual8va = "4";
        return "D";
      case 57:
        actual8va = "4";
        return "C";
      case 74:
        actual8va = "3";
        return "B";
      case 93:
        actual8va = "3";
        return "A";
      case 109:
        actual8va = "3";
        return "G";
      case 127:
        actual8va = "3";
        return "F";
      case 145:
        actual8va = "3";
        return "E";
      case 162:
        actual8va = "3";
        return "D";
      default:
        return "Desconocida";
    }
  } else if (clave == "C4taLinea") {
    switch (posicion) {
      case -46:
        actual8va = "4";
        return "G";
      case -29:
        actual8va = "4";
        return "F";
      case -12:
        actual8va = "4";
        return "E";
      case 5:
        actual8va = "4";
        return "D";
      case 22:
        actual8va = "4";
        return "C";
      case 39:
        actual8va = "3";
        return "B";
      case 57:
        actual8va = "3";
        return "A";
      case 74:
        actual8va = "3";
        return "G";
      case 93:
        actual8va = "3";
        return "F";
      case 109:
        actual8va = "3";
        return "E";
      case 127:
        actual8va = "3";
        return "D";
      case 145:
        actual8va = "3";
        return "C";
      case 162:
        actual8va = "2";
        return "B";
      default:
        return "Desconocida";
    }
  }
}

// Cambiar clave musical
var x = 0;
function cambiarClave() {
  
  if (x == 0) {
    clave = "G";
  } else if (x == 1) {
    clave = "F";
  } else if (x == 2) {
    clave = "C3raLinea";
  } else if (x == 3) {
    clave = "C4taLinea";
  }
  x++;
  if (x > 3) {
    x = 0;
  }
  limpiarNotas();
}

console.log("✅ GAMELOGIC.JS FUNCIONANDO");

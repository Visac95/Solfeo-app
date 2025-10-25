var clave = "C4taLinea"; //G F C3raLinea C4taLinea

function eligio(btn) {
  cambiaColor(btn);
  var notaActualNombre = notas["nota" + notaActual].nombre;
  //console.log(notaActualNombre , btn.innerHTML)
  if (btn.innerText === notaActualNombre) {
    console.log("¡Correcto!");
    cambioColorNota("var(--verde)");
  } else {
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
function notacionAm (posicion) {
  if (clave == "G") {
    switch (posicion) {
      case -46:
        return "A";
      case -29:
        return "G";
      case -12:
        return "F";
      case 5:
        return "E";
      case 22:
        return "D";
      case 39:
        return "C";
      case 57:
        return "B";
      case 74:
        return "A";
      case 93:
        return "G";
      case 109:
        return "F";
      case 127:
        return "E";
      case 145:
        return "D";
      case 162:
        return "C";
      default:
        return "Desconocida";
    }
  } else if (clave == "F") {
    switch (posicion) {
      case -46: 
        return "C";
      case -29:
        return "B";
      case -12:
        return "A";
      case 5:
        return "G"; 
      case 22:
        return "F";
      case 39:
        return "E";
      case 57:
        return "D";
      case 74:
        return "C";
      case 93:
        return "B";
      case 109:
        return "A";
      case 127:
        return "G";
      case 145:
        return "F";
      case 162:
        return "E";
      default:
        return "Desconocida";
    }
  } else if (clave == "C3taLinea") { 
    switch (posicion) {
      case -46:
        return "B";
      case -29:
        return "A";
      case -12:
        return "G";
      case 5:
        return "F";
      case 22:
        return "E";
      case 39:
        return "D";
      case 57:
        return "C";
      case 74:
        return "B";
      case 93:
        return "A";
      case 109:
        return "G";
      case 127:
        return "F";
      case 145:
        return "E";
      case 162:
        return "D";
      default:
        return "Desconocida";
    }
  }
  else if (clave == "C4taLinea") {
    switch (posicion) {
      case -46:
        return "G";
      case -29:
        return "F";
      case -12:
        return "E";
      case 5:
        return "D";
      case 22:
        return "C";
      case 39:
        return "B";
      case 57:
        return "A";
      case 74:
        return "G";
      case 93:
        return "F";
      case 109:
        return "E";
      case 127:
        return "D";
      case 145:
        return "C";
      case 162:
        return "B";
      default:
        return "Desconocida";
    }
  }
};

console.log("✅ GAMELOGIC.JS FUNCIONANDO");

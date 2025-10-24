var clave = "G";

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
const notacionAm = (posicion) => {
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
  }
};

console.log("✅ GAMELOGIC.JS FUNCIONANDO");

const notas = {};
const notaDiv = document.getElementById("nota");
const botonesDiv = document.getElementById("botones");
var pentagramaWidth = window.innerWidth * 0.8 - 150;
var nBPentagrama = Math.round(0.015758249 * pentagramaWidth); //notas que entran en el pentagrama
var notascreadas = 0;
var notaActual = 0;
const lineaVPentagrama = document.createElement("div");

const boton = document.getElementById("siguienteNota");
//const lineaAdicional = document.querySelector(".linea-adicional");

const posiciones = [-46, -29, -12, 5, 22, 39, 57, 74, 93, 109, 127, 145, 162]; // líneas y espacios

// Función para obtener la notación musical según la posición
const notacionAm = (posicion) => {
  switch (posicion) {
    case -46:
      return "C";
    case -29:
      return "D";
    case -12:
      return "E";
    case 5:
      return "F";
    case 22:
      return "G";
    case 39:
      return "A";
    case 57:
      return "B";
    case 74:
      return "C";
    case 93:
      return "D";
    case 109:
      return "E";
    case 127:
      return "F";
    case 145:
      return "G";
    case 162:
      return "A";
    default:
      return "Desconocida";
  }
};

// Mover la línea vertical al hacer clic en el botón
boton.addEventListener("click", () => {
  try {
    notaActual++;
    let valorActual =
      parseInt(notas["nota" + notaActual].obj.style.left, 10) + 10; // 1️⃣ Convertir "100px" a número
    lineaVPentagrama.style.left = valorActual + "px"; // 3️⃣ Asignamos de nuevo con 'px'
    console.log(notas["nota" + notaActual].nombre);
  } catch (error) {
    console.log("No hay más notas que mostrar");
    limpiarNotas();
  }
});

// Genera notas aleatorias dentro del pentagrama
const generarNotasAleatorias = (cantidad) => {
  for (let i = 0; i < cantidad; i++) {
    const notaNueva = document.createElement("div");
    document.querySelector(".pentagrama").appendChild(notaNueva);
    notaNueva.classList.add("nota");
    notaNueva.id = "nota" + i;
    const indicePosicion = Math.floor(Math.random() * posiciones.length);
    notaNueva.style.top = posiciones[indicePosicion] + "px";
    if (
      posiciones[indicePosicion] == -46 ||
      posiciones[indicePosicion] == 162
    ) {
      notaNueva
        .appendChild(document.createElement("div"))
        .classList.add("linea-adicional"); //añade línea adicional para notas fuera del pentagrama
    }
    notaNueva.style.left = 150 + i * 60 + "px";
    // Guardamos la referencia en el objeto notas con propiedades adicionales
    notas["nota" + i] = {
      obj: notaNueva, // referencia al div
      nombre: notacionAm(posiciones[indicePosicion]), // nombre de la nota, por ejemplo 'Do'
    };
    notascreadas++;
  }

  console.log("Notas creadas:", notascreadas, "estas son", notas);
  lineaVPentagrama.classList.add("linea-vertical-pentagrama");
  document.querySelector(".pentagrama").appendChild(lineaVPentagrama);
  console.log(pentagramaWidth);
};

const limpiarNotas = () => {
  // eliminar todos los divs del pentagrama
  for (let key in notas) {
    const nota = notas[key].obj; // accedemos al div
    if (nota && nota.parentNode) {
      nota.parentNode.removeChild(nota); // eliminamos del DOM
    }
  }

  // limpiar el objeto
  for (let key in notas) {
    delete notas[key];
  }
  // eliminar la línea vertical
  lineaVPentagrama.remove();
  notascreadas = 0;
  notaActual = 0;
  generarNotasAleatorias(nBPentagrama);// generar nuevas notas
  // reiniciar la línea vertical
  let valorActual =
    parseInt(notas["nota" + notaActual].obj.style.left, 10) + 10; // 1️⃣ Convertir "100px" a número
  lineaVPentagrama.style.left = valorActual + "px"; // 3️⃣ Asignamos de nuevo con 'px'
  console.log(notas["nota" + notaActual].nombre);
};

// Escuchar cambios en el tamaño de la ventana
window.addEventListener('resize', () => {
  console.log('La ventana cambió de tamaño');
  pentagramaWidth = window.innerWidth * 0.8 - 150;
  //nBPentagrama = Math.round(0.015758249 * pentagramaWidth);
  limpiarNotas() // aquí llamamos a la función que limpia y genera notas
});


generarNotasAleatorias(nBPentagrama); // Aproximadamente 1 nota cada 102.4px de ancho

console.log("✅ RENDERER FUNCIONANDO");

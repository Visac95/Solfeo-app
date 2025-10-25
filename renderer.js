const btnIniciar = document.getElementById("btnIniciar");
const pantallaInicio = document.getElementById("pantallaInicio");
const pantallaPentagrama = document.getElementById("pantallaPentagrama");

btnIniciar.addEventListener("click", () => {
  pantallaInicio.style.display = "none"; // ocultar la pantalla de inicio
  // mostrar la pantalla del pentagrama
  pantallaPentagrama.style.display = "block"; //
});

const notas = {};
const notaDiv = document.getElementById("nota");
const botonesDiv = document.getElementById("botones");
var pentagramaWidth = window.innerWidth * 0.8 - 150;
var nBPentagrama = Math.round(0.015758249 * pentagramaWidth); //notas que entran en el pentagrama
var notascreadas = 0;
var notaActual = 0;
const lineaVPentagrama = document.createElement("div");
//const boton = document.getElementById("siguienteNota");
//const lineaAdicional = document.querySelector(".linea-adicional");
const posiciones = [-46, -29, -12, 5, 22, 39, 57, 74, 93, 109, 127, 145, 162]; // líneas y espacios

// Genera notas aleatorias dentro del pentagrama
function generarNotasAleatorias(cantidad) {
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

  //console.log("Notas creadas:", notascreadas, "estas son", notas);
  lineaVPentagrama.classList.add("linea-vertical-pentagrama");
  document.querySelector(".pentagrama").appendChild(lineaVPentagrama);
  //console.log(pentagramaWidth);
  claveStyle();
}

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
  generarNotasAleatorias(nBPentagrama); // generar nuevas notas
  // reiniciar la línea vertical
  let valorActual =
    parseInt(notas["nota" + notaActual].obj.style.left, 10) + 10; // 1️⃣ Convertir "100px" a número
  lineaVPentagrama.style.left = valorActual + "px"; // 3️⃣ Asignamos de nuevo con 'px'
  console.log(notas["nota" + notaActual].nombre);
};

// Escuchar cambios en el tamaño de la ventana
window.addEventListener("resize", () => {
  console.log("La ventana cambió de tamaño");
  pentagramaWidth = window.innerWidth * 0.8 - 150;
  //nBPentagrama = Math.round(0.015758249 * pentagramaWidth);
  limpiarNotas(); // aquí llamamos a la función que limpia y genera notas
});

// generar las notas iniciales
setTimeout(() => {
  generarNotasAleatorias(nBPentagrama);
  
}, 10);

console.log("✅ RENDERER FUNCIONANDO");

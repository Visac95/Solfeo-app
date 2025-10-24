const notas = {};
const notaDiv = document.getElementById("nota");
const botonesDiv = document.getElementById("botones");
const pentagramaWidth = window.innerWidth * 0.8 - 150;
const nBPentagrama = Math.round(0.015758249 * pentagramaWidth); //notas que entran en el pentagrama
var notascreadas = 0;
var notaActual = 0;
const lineaVPentagrama = document.createElement("div");

const boton = document.getElementById("siguienteNota");
//const lineaAdicional = document.querySelector(".linea-adicional");

const posiciones = [-46, -29, -12, 5, 22, 39, 57, 74, 93, 109, 127, 145, 162]; // líneas y espacios

boton.addEventListener("click", () => {
  notaActual++;
  let valorActual = parseInt(notas["nota"+ notaActual].style.left, 10);// 1️⃣ Convertir "100px" a número
  valorActual += 11;// 2️⃣ Sumamos 10
  lineaVPentagrama.style.left = valorActual + 'px';// 3️⃣ Asignamos de nuevo con 'px'
  //console.log(lineaVPentagrama.style.left);
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
    if (posiciones[indicePosicion] == -46 || posiciones[indicePosicion] == 162) {
      notaNueva.appendChild(document.createElement("div")).classList.add("linea-adicional"); //añade línea adicional para notas fuera del pentagrama
    }
    notaNueva.style.left = 150 + i * 60 + "px";
    notas["nota" + i] = notaNueva;
    notascreadas++;
    
  }
  console.log("Notas creadas:", notascreadas, "estas son" , notas);
  lineaVPentagrama.classList.add("linea-vertical-pentagrama");
  document.querySelector(".pentagrama").appendChild(lineaVPentagrama);
  console.log(pentagramaWidth);
};

generarNotasAleatorias(nBPentagrama); // Aproximadamente 1 nota cada 102.4px de ancho

console.log("✅ RENDERER FUNCIONANDO");

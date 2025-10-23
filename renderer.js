import { generarNotaAleatoria } from "./notesGenerator";

const notas = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const notaDiv = document.getElementById('nota');
const botonesDiv = document.getElementById('botones');



const boton = document.getElementById('cambiarNota');
const nota = document.querySelector('.nota');

export const posiciones = [-46, -29, -12, 5, 22, 39, 57, 74, 93, 109, 127, 145, 162]; // líneas y espacios
let indice = 0;

/*boton.addEventListener('click', () => {
  //alert("CambiarNota")
  indice = (indice + 1) % posiciones.length;
  nota.style.top = posiciones[indice] + 'px';
});
*/

generarNotaAleatoria


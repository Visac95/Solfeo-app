
const notas = [];
const notaDiv = document.getElementById('nota');
const botonesDiv = document.getElementById('botones');
const pentagramaWidth = (window.innerWidth * 0.8) - 150;
const nBPentagrama = Math.round(0.015758249 * pentagramaWidth ); //notas que entran en el pentagrama
console.log("numero de notas en el pentagrama: " + nBPentagrama);

const boton = document.getElementById('añadirNota');
const nota = document.querySelector('.nota');

const posiciones = [-46, -29, -12, 5, 22, 39, 57, 74, 93, 109, 127, 145, 162]; // líneas y espacios
let indice = 0; 

boton.addEventListener('click', () => {
  generarNotasAleatorias()
  
});

const generarNotasAleatorias = (cantidad) => {
  for (let i = 0; i < cantidad; i++) {
    const notaNueva = document.createElement('div');
    document.querySelector('.pentagrama').appendChild(notaNueva);
    notaNueva.classList.add('nota');
    notaNueva.id = 'nota' + i;
    const indicePosicion = Math.floor(Math.random() * posiciones.length);
    notaNueva.style.top = posiciones[indicePosicion] + 'px';
    notaNueva.style.left = (150 + i * 60) + 'px';
  }
  console.log(pentagramaWidth);
}

generarNotasAleatorias(nBPentagrama); // Aproximadamente 1 nota cada 102.4px de ancho

console.log('✅ RENDERER FUNCIONANDO');

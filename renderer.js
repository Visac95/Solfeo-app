const notas = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const notaDiv = document.getElementById('nota');
const botonesDiv = document.getElementById('botones');



const boton = document.getElementById('cambiarNota');
const nota = document.querySelector('.nota');

const posiciones = [65, 80, 95, 110, 125]; // líneas y espacios
let indice = 2;

boton.addEventListener('click', () => {
  alert("CambiarNota")
  indice = (indice + 1) % posiciones.length;
  nota.style.top = posiciones[indice] + 'px';
});

function nuevaNota() {
  const random = notas[Math.floor(Math.random() * notas.length)];
  notaDiv.innerText = `Nota: ${random}`;
}

notas.forEach(n => {
  const btn = document.createElement('button');
  btn.innerText = n;
  btn.onclick = () => {
    alert(`Elegiste ${n}`);
    nuevaNota();
  };
  botonesDiv.appendChild(btn);
});

nuevaNota();


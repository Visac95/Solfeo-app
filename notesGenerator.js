const pentagrama = document.querySelector('.pentagrama');
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generarNotaAleatoria = () => {
    alert("si o no?");
    /*const indiceAleatorio = random(0, posiciones.length - 1);
    const nota = document.createElement('div');
    nota.classList.add('nota');
    nota.style.top = posiciones[indiceAleatorio] + 'px';
    pentagrama.appendChild(nota);*/
    
}
module.exports = { generarNotaAleatoria };


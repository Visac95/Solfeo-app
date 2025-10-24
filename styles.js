// Función para cambiar el color del botón presionado
function cambiaColor(btn) {
  btn.classList.add("presionado");
  setTimeout(() => {
    btn.classList.remove("presionado");
  }, 100); // 200 ms
}

// Función para cambiar el color de la nota actual
function cambioColorNota (color){
        notas["nota" + notaActual].obj.style.backgroundColor = color;
}
console.log("✅ STYLES.JS FUNCIONANDO");




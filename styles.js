var darkmode = true; // Cambiar a false para modo claro

// Función para cambiar el color del botón presionado
function cambiaColor(btn) {
  btn.classList.add("presionado");
  setTimeout(() => {
    btn.classList.remove("presionado");
  }, 100); // 200 ms
}

// Función para cambiar el color de la nota actual
function cambioColorNota(color) {
  notas["nota" + notaActual].obj.style.backgroundColor = color;
}
console.log("✅ STYLES.JS FUNCIONANDO");

// Rutas de las imágenes según el modo
var rutaClaveG = darkmode ? "assets/claveSol.png" : "assets/claveSolDark.png";
var rutaClaveF = darkmode ? "assets/claveFa.png" : "assets/claveFaDark.png";
var rutaClaveC = darkmode ? "assets/claveDo.png" : "assets/claveDoDark.png";

// Función para aplicar el estilo de la clave seleccionada
function claveStyle() {
  const claveImg = document.querySelector(".clave");
  switch (clave) {
    case "G":
      claveImg.src = rutaClaveG;
      claveImg.style = "position: absolute;  height: 180px;  left: 30px;  top: -20px;";
      break;
    case "F":
      claveImg.src = rutaClaveF;
      claveImg.style = "position: absolute;  height: 130px;  left: 10px;  top: -5px;";
      break;
    case "C3raLinea":
      claveImg.src = rutaClaveC;
      claveImg.style = "position: absolute;  height: 160px;  left: -5px;  top: -10px;";
      break;
    case "C4taLinea":
      claveImg.src = rutaClaveC;
      claveImg.style = "position: absolute;  height: 160px;  left: -5px;  top: -45px;";
      break;
    default:
      console.log("Clave no reconocida");
  }
}


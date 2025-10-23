// preload.js
window.addEventListener('DOMContentLoaded', () => {
  console.log('✅ PRELOAD CARGADO CORRECTAMENTE');
});

const { contextBridge } = require('electron');
//const { generarNotaAleatoria } = require('./notesGenerator');

/*contextBridge.exposeInMainWorld('api', {
  generarNotaAleatoria: generarNotaAleatoria
});*/
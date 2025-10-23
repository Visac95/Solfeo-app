const { generarNotaAleatoria } = require('./noteGenerator.js');
const {posiciones} = require('./renderer.js');

window.miAPI = {
    generarNotaAleatoria,
    posiciones
};

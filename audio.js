const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const buffers = {};

const notaSound = {
  C4: new Audio("./assets/Audio/C4.mp3"),
  D4: new Audio("./assets/Audio/D4.mp3"),
  E4: new Audio("./assets/Audio/E4.mp3"),
  F4: new Audio("./assets/Audio/F4.mp3"),
  G4: new Audio("./assets/Audio/G4.mp3"),
  A4: new Audio("./assets/Audio/A4.mp3"),
  B4: new Audio("./assets/Audio/B4.mp3"),
  C5: new Audio("./assets/Audio/C5.mp3"),
  D5: new Audio("./assets/Audio/D5.mp3"),
  E5: new Audio("./assets/Audio/E5.mp3"),
  F5: new Audio("./assets/Audio/F5.mp3"),
  G5: new Audio("./assets/Audio/G5.mp3"),
  A5: new Audio("./assets/Audio/A5.mp3"),
  B5: new Audio("./assets/Audio/B5.mp3"),
  C6: new Audio("./assets/Audio/C6.mp3"),
  C3: new Audio("./assets/Audio/C3.mp3"),
  D3: new Audio("./assets/Audio/D3.mp3"),
  E3: new Audio("./assets/Audio/E3.mp3"),
  F3: new Audio("./assets/Audio/F3.mp3"),
  G3: new Audio("./assets/Audio/G3.mp3"),
  A3: new Audio("./assets/Audio/A3.mp3"),
  B3: new Audio("./assets/Audio/B3.mp3"),
  E2: new Audio("./assets/Audio/E2.mp3"),
  F2: new Audio("./assets/Audio/F2.mp3"),
  G2: new Audio("./assets/Audio/G2.mp3"),
  A2: new Audio("./assets/Audio/A2.mp3"),
  B2: new Audio("./assets/Audio/B2.mp3"),
};

// Carga un sample de audio desde una URL y lo decodifica
async function cargarSample(url) {
  const resp = await fetch(url);
  const arrBuf = await resp.arrayBuffer();
  return await audioCtx.decodeAudioData(arrBuf);
}

// Pre-carga todos los samples de notas
async function preloadNotas() {
  const promesas = Object.keys(notaSound).map(async (n) => {
    const buf = await cargarSample(`./assets/Audio/${n}.mp3`);
    buffers[n] = buf;
  });
  await Promise.all(promesas);
  console.log("✅ Samples cargados correctamente");
}

// Reproduce una nota dada su nombre, con opciones de tiempo, duración y volumen
function playNota(nombreNota, when = 0, duration = 1, volume = 2) {
  const buf = buffers[nombreNota];
  if (!buf) {
    console.warn("❌ Sample no cargado:", nombreNota);
    return;
  }

  // Crear una fuente de audio y reproducirla
  const src = audioCtx.createBufferSource();
  src.buffer = buf;
  const gain = audioCtx.createGain();
  gain.gain.value = volume;
  src.connect(gain).connect(audioCtx.destination);

  // Programar la reproducción
  const startAt = when > 0 ? audioCtx.currentTime + when : audioCtx.currentTime;
  src.start(startAt);
  src.stop(startAt + duration);
}

console.log("✅ AUDIO.JS FUNCIONANDO");

// Iniciar la precarga de samples al cargar el script
preloadNotas();

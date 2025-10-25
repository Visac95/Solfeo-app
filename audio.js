// audio.js
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const buffers = {};

const notas = ['C', 'D', 'E', 'F', 'G', 'A', 'B']; // puedes modificar según tus samples

async function cargarSample(url) {
  const resp = await fetch(url);
  const arrBuf = await resp.arrayBuffer();
  return await audioCtx.decodeAudioData(arrBuf);
}

async function preloadNotas() {
  const promesas = notas.map(async (n) => {
    const buf = await cargarSample(`assets/audio/${n}4.wav`);
    buffers[n] = buf;
  });
  await Promise.all(promesas);
  console.log('✅ Samples cargados correctamente');
}

function playNota(nombreNota, when = 0, duration = 1, volume = 1) {
  const buf = buffers[nombreNota];
  if (!buf) {
    console.warn('❌ Sample no cargado:', nombreNota);
    return;
  }

  const src = audioCtx.createBufferSource();
  src.buffer = buf;
  const gain = audioCtx.createGain();
  gain.gain.value = volume;
  src.connect(gain).connect(audioCtx.destination);

  const startAt = when > 0 ? audioCtx.currentTime + when : audioCtx.currentTime;
  src.start(startAt);
  src.stop(startAt + duration);
}

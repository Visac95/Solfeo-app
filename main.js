const { app, BrowserWindow } = require("electron");
const path = require("path");

// 🔁 Recarga automática
require("electron-reload")(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`),
});

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false, // 🚫 no habilitamos require() en el renderer
      contextIsolation: true, // ✅ obligatorio para seguridad
    },
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

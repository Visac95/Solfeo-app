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
    //fullscreen: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false, // 🚫 no habilitamos require() en el renderer
      contextIsolation: true, // ✅ obligatorio para seguridad
    },
  });

  win.maximize();
  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
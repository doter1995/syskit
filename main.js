const { app, BrowserWindow } = require("electron");
const os = require("os");
function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600
  });
  global.sharedObject = {
    someProperty: "default value"
  };
  win.loadFile("index.html");
  console.log(os.type());
  // 在主进程中
  win.webContents.toggleDevTools();
}
app.on("ready", createWindow);

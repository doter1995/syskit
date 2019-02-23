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
  let url = require("url").format({
    protocol: "file",
    slashes: true,
    pathname: require("path").join(__dirname, "../dist/index.html")
  });

  win.loadURL(url);
  console.log(os.type());
  // 在主进程中
  win.webContents.toggleDevTools();
}
app.on("ready", createWindow);

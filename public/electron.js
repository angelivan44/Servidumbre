const { app, BrowserWindow, ipcMain, dialog  } = require('electron')
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1';
const  { autoUpdater } = require('electron-updater');
let mainview
const dir = __dirname.replace("public","")
const url = `File://${dir}/index.html`
const app_exe =  require('child_process').spawn(`${__dirname}\\server\\server.exe`)
const newURl = `${__dirname}\\server\\server.exe`
autoUpdater.checkForUpdatesAndNotify()
const reciveIpc = ()=> {
  ipcMain.on("openDialog",(e, arg)=>{
    if(arg.data !== "csv"){
      dialog.showOpenDialog(mainview,{
        filters:[{name:arg.data, extensions:[arg.data]}],
        properties:["openFile"]
      }).then((filepath)=>{
        e.sender.send("replyDialog",{filepath:filepath.filePaths[0]})
      })
    }
    else {
      dialog.showOpenDialog(mainview,{
        properties:["openDirectory"]
      }).then((filepath)=>{
        e.sender.send("replyDialog",{filepath:filepath.filePaths[0]})
      })
    }
    }
  )
    
}

app.on('ready', ()=>{

  mainview = new BrowserWindow({
    width:1457,
    height:768,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      nativeWindowOpen: true,
    }

  })
  mainview.loadURL(url, { userAgent: 'Chrome' })
  mainview.show()
  reciveIpc()
  mainview.on("closed",()=>{
    app.quit()
  })
})

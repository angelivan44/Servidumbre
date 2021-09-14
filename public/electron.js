const { app, BrowserWindow, ipcMain, dialog, autoUpdater  } = require('electron')
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1';
let mainview
const dir = __dirname.replace("public","")
const url = `File://${dir}/index.html`
const app_exe =  require('child_process').spawn(`${__dirname}\\server\\server.exe`)
const newURl = `${__dirname}\\server\\server.exe`
const server = "https://hazel-server-electron.vercel.app"
const url2 = `${server}/update/${process.platform}/${app.getVersion()}`
autoUpdater.setFeedURL({ url: url2 })
setInterval(() => {
  autoUpdater.checkForUpdates()
}, 60000)

autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
  const dialogOpts = {
    type: 'info',
    buttons: ['Restart', 'Later'],
    title: 'Application Update',
    message: process.platform === 'win32' ? releaseNotes : releaseName,
    detail: 'A new version has been downloaded. Restart the application to apply the updates.'
  }

  dialog.showMessageBox(dialogOpts).then((returnValue) => {
    if (returnValue.response === 0) autoUpdater.quitAndInstall()
  })
})

autoUpdater.on('error', message => {
  console.error('There was a problem updating the application')
  console.error(message)
})

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
  console.log(url2)
  mainview.on("closed",()=>{
    app.quit()
  })
})

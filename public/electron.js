const {app, BrowserWindow, ipcMain, dialog, autoUpdater } = require('electron')
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1';
let mainview
const dir = __dirname.replace("public","")
const url = `File://${dir}/index.html`
const server = "https://hazel-versel-aks1097lk-angelivan44.vercel.app/"
const url2 = `${server}/update/${process.platform}/${app.getVersion()}`
autoUpdater.setFeedURL({ url2 })
const app_exe =  require('child_process').spawn(`${__dirname}\\server\\server.exe`)
const newURl = `${__dirname}\\server\\server.exe`
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
  console.log(url)
  mainview.on("closed",()=>{
    app.quit()
  })
})

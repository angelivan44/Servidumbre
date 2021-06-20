const {app, BrowserWindow, ipcMain, dialog} = require('electron')

let mainview
const dir = __dirname.replace("public","")
const url = `File://${dir}build/index.html`

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
      contextIsolation: false
    }

  })
  mainview.loadURL('http://localhost:3000/')
  mainview.show()
  reciveIpc()
  console.log(url)
  mainview.on("closed",()=>{
    app.quit()
  })
})

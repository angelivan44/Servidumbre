const {app, BrowserWindow, Menu} = require('electron')


let mainview 
let newProductWindow

app.on('ready', ()=>{

  mainview = new BrowserWindow({
    width:1457,
    height:768,
  })
  mainview.loadURL(`http://localhost:3000/`)
  mainview.show()
  const mainMenu = Menu.buildFromTemplate(templateMenu)
  Menu.setApplicationMenu(mainMenu)
  mainview.on("closed",()=>{
    app.quit()
  })
})

const templateMenu = [
  {
    label:"File",
    submenu:[
      {label:"New Product",
    acelerator: "Ctrl+N",
    click(){
      createNewProductWindow()
    }
  }

    ]
  }
]

function createNewProductWindow(){
  newProductWindow=  new BrowserWindow({
    width:1457,
    height:768,
    title:"Add a new product"
  })}
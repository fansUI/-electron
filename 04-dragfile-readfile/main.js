const { app, BrowserWindow } = require('electron')
const path = require('path')

let mainWindow = null

function createWindow(){
    mainWindow = new BrowserWindow({
        width: 960,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.loadURL(path.join("file://",__dirname,"index.html"))

    mainWindow.webContents.openDevTools()

    mainWindow.on('closed',()=>{
        mainWindow = null
    })
}

app.on('ready',()=>{
    createWindow()
})

app.on('window-all-closed',()=>{
    if(process.platform == 'darwin'){
        app.quit()
    }
})

app.on('active',()=>{
    if(mainWindow === null){
        createWindow()
    }
})
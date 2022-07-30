const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.setMenu(null)

    win.loadFile('static/index.html')

    // win.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()
})

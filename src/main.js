const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    win.setMenu(null);

    win.loadFile('static/index.html');

    win.webContents.openDevTools();

    win.webContents.executeJavaScript(`let CEd_File = '${process.argv[2]}'; CEd_LoadFile();`);
}

app.whenReady().then(() => {
    createWindow();
});

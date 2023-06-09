// 控制应用生命周期和创建原生浏览器窗口的模组
const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const isDevelopment = !app.isPackaged;

function createWindow() {
  // 创建浏览器窗口
  let mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    // 这是左上角icon图标 
    icon:require('path').join(process.cwd(), 'public/img/react.ico'),
    // frame: false, // 去除边框
    webPreferences: {
      // 书写渲染进程中的配置
      contextIsolation: true, // 可以使用require方法
      enableRemoteModule: true, // 可以使用remote方法
      nodeIntegration: true, // 是否启用node集成 渲染进程的内容有访问node的能力
      webviewTag: true, // 是否使用<webview>标签 在一个独立的 frame 和进程里显示外部 web 内容
      webSecurity: false, // 禁用同源策略
      nodeIntegrationInSubFrames: true // 是否允许在子页面(iframe)或子窗口(child window)中集成Node.js
    },
  })
  // 关闭默认菜单
  // Menu.setApplicationMenu(null)


  // 解决应用启动白屏问题
  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
    mainWindow.focus();
  });

  // 当窗口关闭时发出。在你收到这个事件后，你应该删除对窗口的引用，并避免再使用它。
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
  //isDevelopment 打包用
  if (isDevelopment) {
     // 配置热更新
    require('electron-reload')('../', {electron: require(path.join(process.cwd(), "/node_modules/electron")),})
    // 热更新监听vite窗口
    mainWindow.loadURL('http://localhost:3000')
    // 打开开发工具
    // mainWindow.webContents.openDevTools()
  } else {
    // 生产环境中要加载文件，打包的版本
    // Menu.setApplicationMenu(null)
    // 加载 index.html
    mainWindow.loadFile(path.resolve(__dirname, '../dist/index.html')) // 新增
  }
}
// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他
    // 打开的窗口，那么程序会重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在
// 任务栏上的图标来说，应当保持活跃状态，直到用户使用 Cmd + Q 退出。
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
import { useState } from 'react'
import reactLogo from '/img/react.svg'
import viteLogo from '/img/vite.svg'
import typescriptLogo from '/img/typescript.png'
import electronLogo from '/img/electron.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" onClick={() => { return false; }}>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" onClick={() => { return false; }}>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.typescriptlang.org" onClick={() => { return false; }}>
          <img src={typescriptLogo} className="logo typescript" alt="TypeScript logo" />
        </a>
        <a href="https://www.electronjs.org" onClick={() => { return false; }}>
          <img src={electronLogo} className="logo electron" alt="Electron logo" />
        </a> */}
        <a href='javascript(0)'>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href='javascript(0)'>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href='javascript(0)'>
          <img src={typescriptLogo} className="logo typescript" alt="TypeScript logo" />
        </a>
        <a href='javascript(0)'>
          <img src={electronLogo} className="logo electron" alt="Electron logo" />
        </a>

      </div>
      <h1>Vite + React + TypeScript + Electron</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          点击总数是 {count}
        </button>
        <p>
          编辑 <code>src/App.tsx</code>并保存以测试HMR
        </p>
      </div>
      <p className="read-the-docs">
        点击Vite、React、TypeScript和Electron图标了解更多信息
      </p>
      <p className="read-the-docs">当前请求后端地址为：{process.env.BASE_URL}</p>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./index.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-blue-500 text-white p-8 text-center h-32 w-full">
      Tailwind is working! 🎉
    </div>
        
    </>
  )
}

export default App

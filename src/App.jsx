import { useState } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Signup from './pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route element={<Signup/>} path='/signup'></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App

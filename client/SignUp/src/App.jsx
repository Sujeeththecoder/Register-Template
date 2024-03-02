import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUpForm from './SignUpForm'
import {BrowserRouter, Route, Router} from 'react-router-dom'
import login from './login'
function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
  <Routes>
  <Route path="/register" element={<SignUpForm/>} />

  </Routes>
  
 
  </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './templates/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import AddProduct from './pages/AddProduct'
import ViewProduct from './pages/ViewProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* react fregment */}
     <BrowserRouter>
         <Header/>
         <div className='background'>
         <Routes>
            <Route path='/' element={<ViewProduct/>}/>
            <Route path='add-product' element={<AddProduct/>}/>
            <Route path='view-product' element={<ViewProduct />}/>
            <Route path='edit-product/:id' element={<AddProduct/>} />
         </Routes>
         </div>
     </BrowserRouter>
  </>     
  )
}

export default App

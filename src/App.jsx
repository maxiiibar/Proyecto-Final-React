import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Carrito from './components/Carrito/Carrito'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
        <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

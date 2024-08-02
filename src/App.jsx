import './App.css'
import Brand from './components/Brand/Brand'
import ItemList from './components/ItemList/ItemList'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Brand />
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/productos/:categoria" element={<ItemList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { HashRouter, Route, Routes } from 'react-router-dom'
import Login from './page/Login'
import PokedesDetail from './page/PokedesDetail'
import Pokedex from './page/Pokedex'
import ProtectedRoutes from './components/ProtectedRoutes'



function App() {

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />}/>
          <Route path='/pokedex/:id' element={<PokedesDetail />}/>
          </Route>
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App

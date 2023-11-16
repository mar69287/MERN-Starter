import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages'
import { Nav } from './components'
import Auth from './pages/Auth';

function App() {
  const [user, setUser] = useState({})

  return (
    <main className="app">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Auth' element={<Auth setUser={setUser} />} />
      </Routes>
    </main>
  )
}

export default App

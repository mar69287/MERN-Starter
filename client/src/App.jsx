import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages'
import Nav from './components/Nav';

function App() {

  return (
    <main className="app">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
  )
}

export default App

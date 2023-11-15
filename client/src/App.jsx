import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { Home } from './pages'
import Nav from './components/Nav';

function App() {

  return (
    <main className="app">
      <Nav />
      <Home />
    </main>
  )
}

export default App

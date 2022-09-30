import React from 'react'
import Navbar from './components/Navbar'
import AppRouter from './router/AppRouter'
import './styles/main.scss'

const App: React.FC = () => {
  return (
    <div className="container mx-auto font-roboto">
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App

import React from 'react'
import AppRouter from './router/AppRouter'
import './styles/main.scss'

const App: React.FC = () => {
  return (
    <div className="font-roboto container mx-auto">
      <AppRouter />
    </div>
  )
}

export default App

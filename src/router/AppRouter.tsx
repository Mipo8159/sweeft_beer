import React from 'react'
import {Route, Routes} from 'react-router-dom'
import BeerLayout from '../components/BeerLayout'
import About from '../pages/About'
import BeersPage from '../pages/BeersPage'
import BeerPage from '../pages/BeerPage'
import Error from '../pages/Error'
import HopePage from '../pages/HopePage'
import {RouteEnum} from './routes'

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={RouteEnum.HOME_PAGE} element={<HopePage />} />

      <Route path="beers" element={<BeerLayout />}>
        <Route index element={<BeersPage />} />
        <Route path=":id" element={<BeerPage />} />
      </Route>

      <Route path={RouteEnum.ABOUT} element={<About />} />
      <Route path={RouteEnum.NAVIGATE} element={<Error />} />
    </Routes>
  )
}

export default AppRouter

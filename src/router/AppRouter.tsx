import React from 'react'
import {Route, Routes} from 'react-router-dom'
import BeerLayout from '../components/BeerLayout'
import {
  AboutPage,
  BeerListPage,
  BeerPage,
  CatalogPage,
  ErrorPage,
  RandomBeer,
} from '../pages'
import HopePage from '../pages/Home.page'
import {RouteEnum} from './routes'

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={RouteEnum.HOME_PAGE} element={<HopePage />} />

      <Route path="beers" element={<BeerLayout />}>
        <Route index element={<BeerListPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path=":id" element={<BeerPage />} />
        <Route path="random" element={<RandomBeer />} />
      </Route>

      <Route path={RouteEnum.ABOUT} element={<AboutPage />} />
      <Route path={RouteEnum.NAVIGATE} element={<ErrorPage />} />
    </Routes>
  )
}

export default AppRouter

import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import {RouteEnum} from '../router/routes'

const BeerLayout: React.FC = () => {
  return (
    <div className="my-20">
      <nav className="flex justify-center py-3 space-x-10 list-none shadow-md shadow-red-200">
        <li className="font-bold uppercase">
          <Link to={RouteEnum.BEERS_PAGE}>Catalog</Link>
        </li>

        <li className="font-bold uppercase">
          <Link reloadDocument to={RouteEnum.BEER_RANDOM_PAGE}>
            Random
          </Link>
        </li>
      </nav>
      <Outlet />
    </div>
  )
}

export default BeerLayout

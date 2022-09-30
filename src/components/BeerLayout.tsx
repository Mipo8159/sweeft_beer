import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import {RouteEnum} from '../router/routes'

const BeerLayout: React.FC = () => {
  return (
    <div className="my-20">
      <nav className="flex justify-center py-3 space-x-10 list-none shadow-md shadow-red-200">
        <li className="font-bold uppercase">
          <NavLink
            end
            style={({isActive}) => {
              return isActive ? {color: 'crimson'} : {}
            }}
            to={RouteEnum.BEERS_PAGE}
          >
            Catalog
          </NavLink>
        </li>

        <li className="font-bold uppercase">
          <NavLink
            end
            style={({isActive}) => {
              return isActive ? {color: 'crimson'} : {}
            }}
            reloadDocument
            to={RouteEnum.BEER_RANDOM_PAGE}
          >
            Random
          </NavLink>
        </li>
      </nav>
      <Outlet />
    </div>
  )
}

export default BeerLayout

import React from 'react'
import {RouteEnum} from '../router/routes'
import {NavLink} from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-10 flex justify-center py-2 mx-auto space-x-20 text-xl font-bold text-white uppercase list-none bg-yellow-600 ">
      <li>
        <NavLink
          end
          style={({isActive}) => {
            return isActive ? {color: 'crimson'} : {}
          }}
          to={RouteEnum.HOME_PAGE}
        >
          home
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({isActive}) => {
            return isActive ? {color: 'crimson'} : {}
          }}
          to={RouteEnum.BEER_LIST_PAGE}
        >
          pub
        </NavLink>
      </li>
      <li>
        <NavLink
          end
          style={({isActive}) => {
            return isActive ? {color: 'crimson'} : {}
          }}
          to={RouteEnum.ABOUT}
        >
          about
        </NavLink>
      </li>
    </nav>
  )
}

export default Navbar

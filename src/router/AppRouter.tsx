import React, {Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'
import Loader from '../components/Loader'
import Error from '../pages/Error'
import {RouteEnum, RouteInterface, routes} from './routes'

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {routes.map((route: RouteInterface) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <Suspense fallback={<Loader />}>
              <route.element />
            </Suspense>
          }
        />
      ))}

      <Route path={RouteEnum.NAVIGATE} element={<Error />} />
    </Routes>
  )
}

export default AppRouter

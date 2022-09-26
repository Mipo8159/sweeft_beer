import React from 'react'
import BearPage from '../pages/BearPage'
import HopePage from '../pages/HopePage'

export interface RouteInterface {
  path: string
  element: React.ElementType
}

export enum RouteEnum {
  HOME = '',
  BEER_PAGE = '/beer/:id',
  NAVIGATE = '*',
}

export const routes: RouteInterface[] = [
  {path: RouteEnum.HOME, element: HopePage},
  {path: RouteEnum.BEER_PAGE, element: BearPage},
]

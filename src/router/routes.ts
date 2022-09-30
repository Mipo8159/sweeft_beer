import React from 'react'

export interface RouteInterface {
  path: string
  element: React.ElementType
}

export enum RouteEnum {
  HOME_PAGE = '/',
  ABOUT = '/about',

  BEERS_PAGE = '/beers',
  BEER_PAGE = '/beers/:id',
  BEER_RANDOM_PAGE = '/beers/random',

  NAVIGATE = '*',
}

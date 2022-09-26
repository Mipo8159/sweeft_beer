import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {BeerInterface} from '../../interfaces/beer.interface'
import {GetBeerRequest} from './request/get_beer.request'

export const beerApi = createApi({
  reducerPath: 'beer',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.punkapi.com/v2',
  }),
  endpoints: (build) => ({
    getBeers: build.query<BeerInterface[], GetBeerRequest>({
      query: ({page, per_page}) => ({
        url: '/beers',
        params: {page, per_page},
      }),
    }),

    getBeer: build.query<BeerInterface[], number>({
      query: (id: number) => ({
        url: `/beers/${id}`,
      }),
    }),
  }),
})

export const {useGetBeersQuery, useGetBeerQuery, usePrefetch} = beerApi

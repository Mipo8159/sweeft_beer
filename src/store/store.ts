import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/dist/query/react'
import {beerApi} from './beer/beer.api'

const rootReducer = combineReducers({
  [beerApi.reducerPath]: beerApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(beerApi.middleware),
})

setupListeners(store.dispatch)

export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

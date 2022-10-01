import axios from 'axios'
import {useEffect, useState} from 'react'
import {useSearchParams} from 'react-router-dom'
import {BeerInterface} from '../interfaces/beer.interface'

export const useDebouncedFetch = () => {
  const [searchParams] = useSearchParams()
  const beer_name = searchParams.get('beer_name')
  const page = searchParams.get('page')
  const per_page = searchParams.get('per_page')

  const [debounced, setDebounced] = useState<string>('')
  const [data, setdata] = useState<BeerInterface[]>()
  const [isLoading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(beer_name!)
    }, 200)
    return () => clearTimeout(handler)
  }, [beer_name])

  useEffect(() => {
    if (!debounced) setLoading(true)
    axios
      .get(
        `https://api.punkapi.com/v2/beers?${
          beer_name ? `beer_name=${beer_name}&` : ''
        }page=${page}&per_page=${per_page}`
      )
      .then((res) => {
        setLoading(false)
        setdata(res.data)
      })
      .catch(() => setLoading(false))
  }, [debounced, page, per_page]) // eslint-disable-line

  return {isLoading, data}
}

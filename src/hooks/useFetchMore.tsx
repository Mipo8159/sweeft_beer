import axios from 'axios'
import {useEffect, useState} from 'react'
import {BeerInterface} from '../interfaces/beer.interface'

export const useFetchMore = () => {
  const [data, setData] = useState<BeerInterface[]>([])

  useEffect(() => {
    if (data.length >= 30) {
      return
    }
    const fetchMore = async () => {
      const res = await axios.get(
        `https://api.punkapi.com/v2/beers/random`
      )
      const [data] = res.data
      setData((prev: BeerInterface[]) => {
        return prev.find((i: BeerInterface) => i.id === data.id)
          ? [...prev]
          : [...prev, data]
      })
    }
    fetchMore()
  }, [data]) // eslint-disable-line

  return {data}
}

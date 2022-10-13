import axios from 'axios'
import {useEffect, useState} from 'react'
import {BeerInterface} from '../interfaces/beer.interface'

const useFetchRandom = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [item, setItem] = useState<BeerInterface>({} as BeerInterface)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get<BeerInterface[]>('https://api.punkapi.com/v2/beers/random')
      .then((res) => {
        const [item] = res.data

        setItem((prev) => (prev.id !== item.id ? {...item} : {...prev}))
        setIsLoading(false)
      })
      .catch(() => setIsLoading(false))
  }, [])

  return {isLoading, item}
}

export default useFetchRandom

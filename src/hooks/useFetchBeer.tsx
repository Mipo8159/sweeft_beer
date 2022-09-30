import axios from 'axios'
import {useEffect} from 'react'
import {useState} from 'react'
import {BeerInterface} from '../interfaces/beer.interface'

export const useFetchBeer = () => {
  const [beer, setBeer] = useState<BeerInterface>()

  useEffect(() => {
    axios
      .get(`https://api.punkapi.com/v2/beers/random`)
      .then((res) => setBeer(res.data))
  }, [])

  return {beer}
}

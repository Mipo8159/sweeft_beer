import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Helmet} from 'react-helmet-async'
import BeerItem from '../components/BeerItem'
import {BeerInterface} from '../interfaces/beer.interface'

const BeersPage: React.FC = () => {
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
      setData((prev) => {
        return prev.find((i) => i.id === data.id)
          ? [...prev]
          : [...prev, data]
      })
    }
    fetchMore()
  }, [data]) // eslint-disable-line

  return (
    <div>
      <Helmet>
        <title>Bear Catalog</title>
      </Helmet>

      <h1 className="mb-10 text-2xl font-bold uppercase">Beer catalog</h1>

      <div className="grid grid-cols-5 gap-8">
        {data?.map((beer: BeerInterface) => (
          <BeerItem
            key={beer.id}
            id={beer.id}
            name={beer.name}
            tagline={beer.tagline}
            image_url={beer.image_url}
            first_brewed={beer.first_brewed}
          />
        ))}
      </div>
    </div>
  )
}

export default BeersPage

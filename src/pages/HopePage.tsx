import React, {useState} from 'react'
import {Helmet} from 'react-helmet-async'
import BeerItem from '../components/BeerItem'
import Loader from '../components/Loader'
import {BeerInterface} from '../interfaces/beer.interface'
import {useGetBeersQuery} from '../store/beer/beer.api'

const HopePage: React.FC = () => {
  const [page] = useState(() => Math.floor(Math.random() * 7) + 1)

  const {isLoading, data} = useGetBeersQuery({
    page: page,
    per_page: 30,
  })

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="text-center py-10">
      <Helmet>
        <title>Bear App</title>
      </Helmet>

      <h1 className="uppercase underline text-2xl font-bold mb-10">
        Beer Hub
      </h1>

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

export default HopePage

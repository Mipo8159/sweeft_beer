import React, {useState} from 'react'
import {Helmet} from 'react-helmet-async'
import BeerItem from '../components/BeerItem'
import {BeerInterface} from '../interfaces/beer.interface'
import {useGetBeersQuery} from '../store/beer/beer.api'

const BeersPage: React.FC = () => {
  const [page] = useState(() => Math.floor(Math.random() * 7) + 1)

  const {data} = useGetBeersQuery({
    page: page,
    per_page: 30,
  })

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

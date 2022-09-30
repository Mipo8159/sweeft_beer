import React from 'react'
import {Helmet} from 'react-helmet-async'
import BeerItem from '../components/BeerItem'
import {useFetchMore} from '../hooks/useFetchMore'
import {BeerInterface} from '../interfaces/beer.interface'

const CatalogPage: React.FC = () => {
  const {data} = useFetchMore()

  return (
    <div>
      <Helmet>
        <title>Bear Catalog</title>
      </Helmet>

      <h1 className="my-10 text-2xl font-bold text-center uppercase">
        Beer catalog
      </h1>

      <div className="grid grid-cols-5 gap-8 xl:px-10">
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

export default CatalogPage

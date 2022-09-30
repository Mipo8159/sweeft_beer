import React, {useState} from 'react'
import {Helmet} from 'react-helmet-async'
import Loader from '../components/Loader'
import {useGetBeersQuery} from '../store/beer/beer.api'

const BeerListPage: React.FC = () => {
  const [per_page, setPer_page] = useState<number>(30)
  const {isLoading, data} = useGetBeersQuery({page: 1, per_page})

  if (isLoading) return <Loader />

  return (
    <div className="flex flex-col items-center">
      <Helmet>
        <title>Bear Catalog</title>
      </Helmet>

      <h1 className="my-10 text-2xl font-bold text-center uppercase">
        Beer list
      </h1>

      <div>
        <form>
          <input className="border" type="text" />
          <button></button>
        </form>

        <select
          value={per_page}
          onChange={(e) => setPer_page(Number(e.target.value))}
          className="border"
        >
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="45">45</option>
          <option value="60">60</option>
        </select>
      </div>

      <div className="grid grid-cols-4 gap-8 xl:px-10">
        {/* {data?.map((beer: BeerInterface) => (
          <BeerItem
            key={beer.id}
            id={beer.id}
            name={beer.name}
            tagline={beer.tagline}
            image_url={beer.image_url}
            first_brewed={beer.first_brewed}
          />
        ))} */}
      </div>
    </div>
  )
}

export default BeerListPage

import classNames from 'classnames'
import React, {useState, useEffect} from 'react'
import {Helmet} from 'react-helmet-async'
import {useSearchParams} from 'react-router-dom'
import BeerItem from '../components/BeerItem'
import Loader from '../components/Loader'
import {useDebouncedFetch} from '../hooks/useDebouncedFetch'
import {BeerInterface} from '../interfaces/beer.interface'

const BeerListPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [beer_name, setBeer_name] = useState<string>('')
  const [page, setPage] = useState<string>(() => searchParams.get('page')!)
  const [per_page, setPer_page] = useState<string>(() => searchParams.get('per_page')!)
  const [last_page, setLast_page] = useState<number>(() => Math.ceil(325 / parseInt(per_page)))
  const {isLoading, data} = useDebouncedFetch()

  useEffect(() => {
    setSearchParams({...(beer_name && {beer_name}), page, per_page})
  }, [page, per_page, beer_name]) // eslint-disable-line

  if (isLoading) return <Loader />

  return (
    <div className="flex flex-col items-center">
      <Helmet>
        <title>Bear Catalog</title>
      </Helmet>

      <h1 className="my-10 text-2xl font-bold text-center uppercase">Beer list</h1>

      <div className="mb-6">
        <input
          className="border border-gray-100 shadow-lg w-[600px] py-1.5 mr-2"
          value={beer_name}
          onChange={(e) => setBeer_name(e.target.value)}
          type="text"
        />

        <select
          value={per_page}
          onChange={(e) => {
            setPer_page(e.target.value)
            setLast_page(Math.ceil(325 / parseInt(per_page)))
          }}
          className="w-16 px-2 text-white bg-black h-9"
        >
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="45">45</option>
          <option value="60">60</option>
        </select>
      </div>

      <div className="grid grid-cols-5 gap-8 mb-10 xl:px-10">
        {data &&
          data?.map((beer: BeerInterface) => (
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

      <ul className="flex">
        {[...Array(last_page).keys()].map((p) => (
          <li
            key={p}
            onClick={() => setPage(String(p + 1))}
            className={classNames(
              'flex cursor-pointer items-center justify-center w-8 h-8 mr-2 border border-black',
              {'bg-black text-white': Number(page) === p + 1}
            )}
          >
            {p + 1}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BeerListPage

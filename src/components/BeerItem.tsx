import React from 'react'
import {useNavigate} from 'react-router-dom'
import {usePrefetch} from '../store/beer/beer.api'

interface BeerItemProps {
  id: number
  name: string
  tagline: string
  image_url: string
  first_brewed: string
}
const BeerItem: React.FC<BeerItemProps> = ({
  id,
  name,
  tagline,
  image_url,
  first_brewed,
}) => {
  const navigate = useNavigate()
  const prefetchBeer = usePrefetch('getBeer')

  return (
    <div
      onMouseEnter={() => prefetchBeer(id, {force: true})}
      onClick={() => navigate(`/beer/${id}`)}
      className="shadow-md flex h-[200px] p-3 hover:shadow-red-200 cursor-pointer overflow-hidden"
    >
      <div className="w-1/2">
        <img
          className="w-full h-full object-contain"
          src={image_url}
          alt={name}
        />
      </div>

      <div className="flex flex-col p-1 pb-0 flex-1">
        <h2 className="font-bold text-lg mb-2">{name}</h2>
        <p className="flex-1">{tagline}</p>
        <span className="uppercase underline">since {first_brewed}</span>
      </div>
    </div>
  )
}

export default BeerItem

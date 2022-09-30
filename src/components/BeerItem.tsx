import React from 'react'
import {Link} from 'react-router-dom'

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
  return (
    <Link to={`/beers/${id}`}>
      <div className="shadow-md flex h-[200px] p-3 hover:shadow-red-200 cursor-pointer overflow-hidden">
        <div className="w-1/2">
          <img
            className="object-contain w-full h-full"
            src={image_url}
            alt={name}
          />
        </div>

        <div className="flex flex-col flex-1 p-1 pb-0">
          <h2 className="mb-2 text-lg font-bold">{name}</h2>
          <p className="flex-1">{tagline}</p>
          <span className="underline uppercase">since {first_brewed}</span>
        </div>
      </div>
    </Link>
  )
}

export default BeerItem

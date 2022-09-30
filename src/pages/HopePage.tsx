import React from 'react'
import {Helmet} from 'react-helmet-async'

const HopePage: React.FC = () => {
  return (
    <div className="py-40 text-center">
      <Helmet>
        <title>Bear App</title>
      </Helmet>

      <div className="flex flex-col items-center">
        <h1 className="mb-10 text-3xl font-bold uppercase">
          Beer hub (homepage)
        </h1>

        <div className="w-[450px]">
          <img
            className="object-contain"
            src="/beer.jpg"
            alt="beerhub home page cover"
          />
        </div>
      </div>
    </div>
  )
}

export default HopePage

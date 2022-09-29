import React from 'react'
import {Helmet} from 'react-helmet-async'
import {useParams} from 'react-router-dom'
import Loader from '../components/Loader'
import {useGetBeerQuery} from '../store/beer/beer.api'

const BearPage: React.FC = () => {
  const {id} = useParams()
  const {isLoading, data} = useGetBeerQuery(id!, {
    skip: !id,
  })

  if (isLoading) return <Loader />

  return (
    <div className="p-20 px-40 ">
      <Helmet>
        <title>{data && data[0].name}</title>
      </Helmet>

      {data && (
        <div className="relative flex">
          <div className="w-1/4 h-[600px] shadow-md p-4 shadow-red-200 mr-5">
            <img
              className="object-contain w-full h-full"
              src={data![0].image_url}
              alt={data[0].name}
            />
          </div>

          <div className="flex flex-col items-center flex-1 pt-8 shadow-md shadow-yellow-200">
            <div className="text-center w-[800px] mb-8">
              <h1 className="text-2xl font-bold text-red-800 uppercase">
                {data![0].name}
              </h1>
              <h3 className="font-bold text-yellow-900">
                {data[0].tagline}
              </h3>
            </div>

            <div className="text-center w-[800px] mb-10">
              <span className="font-bold uppercase">description</span>
              <p className="text-start-start">{data[0].description}</p>
            </div>

            <div className="text-center w-[800px] mb-10">
              <span className="font-bold uppercase">tips</span>
              <p className="">{data[0].brewers_tips}</p>
            </div>

            <div className="text-center w-[800px] mb-10 flex flex-col items-center">
              <span className="font-bold uppercase">food pairing</span>
              <ul className="list-disc text-start">
                {data[0].food_pairing.map((pair) => (
                  <li className="ml-10" key={pair}>
                    {pair}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center w-[800px] mb-10 flex flex-col items-center">
              <span className="uppercase font-bold mb-1.5">
                ingredients
              </span>

              <div className="flex ml-8 font-bold text-yellow-800 uppercase">
                {Object.keys(data[0].ingredients).map((i) => (
                  <span key={i} className="mr-8">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute flex underline uppercase right-14 bottom-8">
            since {data[0].first_brewed}
          </div>
        </div>
      )}
    </div>
  )
}

export default BearPage

import React from 'react'
import {Helmet} from 'react-helmet-async'
import {useNavigate, useParams} from 'react-router-dom'
import Loader from '../components/Loader'
import {useGetBeerQuery} from '../store/beer/beer.api'

const BearPage: React.FC = () => {
  const navigate = useNavigate()
  const params = useParams()
  const {isLoading, data} = useGetBeerQuery(Number(params.id), {
    skip: !params.id,
  })

  if (isLoading) {
    return <Loader />
  }
  return (
    <div className="p-20 px-40 ">
      <Helmet>
        <title>{data && data[0].name}</title>
      </Helmet>

      <button
        onClick={() => navigate('/')}
        className="py-2.5 w-1/4 shadow-md shadow-red-200 mb-4 uppercase font-bold"
      >
        back to list
      </button>

      {data && (
        <div className="flex relative">
          <div className="w-1/4 h-[600px] shadow-md p-4 shadow-red-200 mr-5">
            <img
              className="w-full h-full object-contain"
              src={data![0].image_url}
              alt={data[0].name}
            />
          </div>

          <div className="flex flex-col pt-8 flex-1 items-center shadow-md shadow-yellow-200">
            <div className="text-center w-[800px] mb-8">
              <h1 className="uppercase text-2xl font-bold text-red-800">
                {data![0].name}
              </h1>
              <h3 className="font-bold text-yellow-900">
                {data[0].tagline}
              </h3>
            </div>

            <div className="text-center w-[800px] mb-10">
              <span className="uppercase font-bold">description</span>
              <p className="text-start-start">{data[0].description}</p>
            </div>

            <div className="text-center w-[800px] mb-10">
              <span className="uppercase font-bold">tips</span>
              <p className="">{data[0].brewers_tips}</p>
            </div>

            <div className="text-center w-[800px] mb-10 flex flex-col items-center">
              <span className="uppercase font-bold">food pairing</span>
              <ul className="text-start list-disc">
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

              <div className="uppercase ml-8 flex font-bold text-yellow-800">
                {Object.keys(data[0].ingredients).map((i) => (
                  <span key={i} className="mr-8">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="uppercase underline flex right-14 bottom-8 absolute">
            since {data[0].first_brewed}
          </div>
        </div>
      )}
    </div>
  )
}

export default BearPage

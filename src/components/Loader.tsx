import React from 'react'

interface LoaderProps {
  style?: string
}
const Loader: React.FC<LoaderProps> = ({style}) => {
  return (
    <div
      className={`absolute dotted-loader ${
        style
          ? style
          : 'h-16 w-16 left-[53%] top-[53%] before:h-12 before:w-12'
      } `}
    ></div>
  )
}

export default Loader

import React from 'react'
import Sky from './Sky'

const Canvas = () => {
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight]
  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax"
      viewBox={viewBox}
    >
      {/* <circle cx={0} cy={0} r={50} /> */}
      <Sky/>
    </svg>
  )
}
export default Canvas
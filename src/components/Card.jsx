import React from 'react'

function Card({children, bg = 'bg-gry-100'}) {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md relative`}>
      {children}
    </div>
  )
}

export default Card
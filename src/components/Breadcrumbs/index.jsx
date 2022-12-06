import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumbs = (props) => {
  const { path = [] } = props
  return (
    <div className="flex gap-1.5 py-8 px-20 font-medium text-13 text-gray-mid">
      {path.map((p, index) => {
        if (index === path.length - 1) {
          return <span className="text-black-mate">{p?.text}</span>
        }
        return (
          <>
            <Link to={p?.to || '/'}>{p?.text}</Link>
            <span>/</span>
          </>
        )
      })}
    </div>
  )
}

export default Breadcrumbs

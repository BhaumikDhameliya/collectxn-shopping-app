import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

const CategoryFilter = () => {
  const navigate = useNavigate()
  const { categoryId } = useParams()
  const categories = useSelector((state) => state.category.categories)

  return (
    <div className="flex flex-col">
      <div className="flex pb-3 border-b border-gray-mid">
        <p className="uppercase font-medium ">Catagories</p>
      </div>
      <ul className="flex flex-col px-2 py-4 gap-3">
        {Object.entries(categories || {}).map(([catId, { name }], index) => {
          if (index > 3) return null
          return (
            <li key={catId}>
              <div className="">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={name}
                    name={name}
                    value={catId}
                    checked={catId === categoryId}
                    onChange={(e) => {
                      if (e.target.checked) {
                        navigate(`/category/${catId}`)
                      }
                    }}
                    className="accent-black-mate"
                  />
                  <label htmlFor={name}>{name}</label>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CategoryFilter

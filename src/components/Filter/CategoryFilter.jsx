import React from 'react'
import { useSelector } from 'react-redux'

const CategoryFilter = () => {
  const categories = useSelector((state) => state.category.categories)

  return (
    <div className="flex flex-col">
      <div className="flex pb-3 border-b border-gray-mid">
        <p className="uppercase font-medium ">Catagories</p>
      </div>
      <ul className="flex flex-col px-2 py-4 gap-3">
        {Object.entries(categories || {}).map(
          ([categoryId, { name }], index) => {
            if (index > 3) return null
            return (
              <li key={categoryId}>
                <div className="">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={name}
                      name="category"
                      value={categoryId}
                      className="accent-black-mate"
                    />
                    <label htmlFor={name}>{name}</label>
                  </div>
                </div>
              </li>
            )
          },
        )}
      </ul>
    </div>
  )
}

export default CategoryFilter

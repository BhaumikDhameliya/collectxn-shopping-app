import React from 'react'

const categoryList = [{ name: 'hello' }]

const CategoryFilter = () => {
  return (
    <div className="flex flex-col">
      <div className="flex pb-3 border-b border-gray-mid">
        <p className="uppercase font-medium ">Catagories</p>
      </div>
      <ul className="flex flex-col px-2 py-4 gap-3">
        {categoryList.map(({ name }, index) => {
          return (
            <li key={index}>
              <div className="">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
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

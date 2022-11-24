import React from 'react'

const categoryList = [
  { name: 'Sneakers' },
  { name: 'Apparels' },
  { name: 'Jewellary' },
  { name: 'Play Station' },
]

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
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={name}
                    name={name}
                    value={name}
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

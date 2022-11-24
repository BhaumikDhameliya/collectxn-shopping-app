import React from 'react'

const brandList = [
  { name: 'Nike' },
  { name: 'Adidas' },
  { name: 'Urban Monkey' },
  { name: 'Reebok' },
  { name: 'Nike' },
  { name: 'Adidas' },
  { name: 'Urban Monkey' },
  { name: 'Reebok' },
]

const BrandFilter = () => {
  return (
    <div className="flex flex-col">
      <div className="flex pb-3 border-b border-gray-mid">
        <p className="uppercase font-medium ">Brand</p>
      </div>
      <ul className="flex flex-col px-2 py-4 gap-3 text-13">
        {brandList.map(({ name }, index) => {
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
                  <label htmlFor={name} className="font-cera-pro font-medium">
                    {name}
                  </label>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BrandFilter

import React from 'react'

const priceList = [
  { name: '₹2500 to ₹4000', count: 265 },
  { name: '₹4000 to ₹8500', count: 208 },
  { name: '₹8500 to ₹12000', count: 130 },
  { name: '₹12000 to ₹20000', count: 25 },
]

const PriceFilter = () => {
  return (
    <div className="flex flex-col">
      <div className="flex pb-3 border-b border-gray-mid">
        <p className="uppercase font-medium ">PRICE</p>
      </div>
      <ul className="flex flex-col px-2 py-4 gap-3 text-13">
        {priceList.map(({ name, count }, index) => {
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
                  <label
                    htmlFor={name}
                    className="font-cera-pro font-medium flex gap-2"
                  >
                    <p>{name}</p>
                    <p>({count})</p>
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

export default PriceFilter

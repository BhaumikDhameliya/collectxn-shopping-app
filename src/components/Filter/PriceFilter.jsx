import React, { useState } from 'react'

const priceList = [
  { name: '₹2500 to ₹4000', count: 265 },
  { name: '₹4000 to ₹8500', count: 208 },
  { name: '₹8500 to ₹12000', count: 130 },
  { name: '₹12000 to ₹20000', count: 25 },
]

const PriceFilter = () => {
  const [min, setMin] = useState()
  const [max, setMax] = useState()
  return (
    <div className="flex flex-col">
      <div className="flex pb-3 border-b border-gray-mid">
        <p className="uppercase font-medium">PRICE</p>
      </div>
      <div>
        <div className="flex gap-3 px-2 pt-4 laptop:max-w-xs text-13">
          <input
            type="number"
            min={0}
            className="flex border border-gray-dark rounded-md p-2 w-16"
            placeholder="Min"
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />
          <input
            type="number"
            min={0}
            className="flex border border-gray-dark rounded-md p-2 w-16"
            placeholder="Max"
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
          <button className="bg-black-mate text-13 flex items-center justify-center px-3 gap-[10px] rounded-full w-full font-medium tablet:text-xl border border-black-mate disabled:bg-gray-mid disabled:shadow-none disabled:text-white hover:shadow-btn hover:bg-punchy-neon hover:text-black-mate text-white">
            <span className="text-13">Go</span>
          </button>
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
    </div>
  )
}

export default PriceFilter

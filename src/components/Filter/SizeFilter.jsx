import React from 'react'

const brandList = [
  { name: '3' },
  { name: '3.5' },
  { name: '4' },
  { name: '4.5' },
  { name: '5' },
  { name: '5.5' },
  { name: '6' },
  { name: '6.5' },
  { name: '7' },
  { name: '7.5' },
  { name: '8' },
  { name: '8.5' },
  { name: '9' },
  { name: '9.5' },
  { name: '10' },
  { name: '10.5' },
  { name: '11' },
  { name: '11.5' },
  { name: '12' },
  { name: '12.5' },
  { name: '13' },
  { name: '13.5' },
  { name: '14' },
  { name: '14.5' },
  { name: '15' },
  { name: '15.5' },
  { name: '16' },
  { name: '16.5' },
  { name: '17' },
  { name: '17.5' },
  { name: '18' },
  { name: '18.5' },
  { name: '19' },
  { name: '19.5' },
  { name: '20' },
]

const SizeFilter = () => {
  return (
    <div className="flex flex-col">
      <div className="flex pb-3 border-b border-gray-mid">
        <p className="uppercase font-medium ">Sizes</p>
      </div>
      <ul className="grid items-center justify-center flex-wrap px-2 py-4 gap-3 text-13 grid-cols-5">
        {brandList.map(({ name }, index) => {
          return (
            <li key={index}>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={name}
                  name={name}
                  value={name}
                  className="accent-black-mate hidden peer"
                />
                <label
                  htmlFor={name}
                  className="font-cera-pro font-medium flex items-center justify-center px-2 py-1.5 rounded border border-gray-light peer-checked:bg-gray-light peer-checked:text-white flex-grow"
                >
                  {name}
                </label>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SizeFilter

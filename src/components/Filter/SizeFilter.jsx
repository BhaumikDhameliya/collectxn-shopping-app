import React from 'react'

const SizeFilter = (props) => {
  const { sizeList = [] } = props
  return (
    <div className="flex flex-col">
      <div className="flex pb-3 border-b border-gray-mid">
        <p className="uppercase font-medium ">Sizes</p>
      </div>
      <ul className="grid items-center justify-center flex-wrap px-2 py-4 gap-3 text-13 grid-cols-5">
        {sizeList.map((size, index) => {
          return (
            <li key={index}>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={size}
                  name={size}
                  className="accent-black-mate hidden peer"
                />
                <label
                  htmlFor={size}
                  className="font-cera-pro font-medium flex items-center justify-center px-2 py-1.5 rounded border border-gray-light peer-checked:bg-black-mate peer-checked:text-white flex-grow"
                >
                  {size}
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

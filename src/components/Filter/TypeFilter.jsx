import React from 'react'

const TypeFilter = (props) => {
  const { typeList = [] } = props
  return (
    <div className="flex flex-col">
      <div className="flex pb-3 border-b border-gray-mid">
        <p className="uppercase font-medium">Types</p>
      </div>
      <ul className="flex flex-col px-2 py-4 gap-3 text-13">
        {typeList.map((type, index) => {
          return (
            <li key={index}>
              <div className="">
                <div className="flex items-center gap-2">
                  <input
                    id={type}
                    type="checkbox"
                    name="type"
                    value={type}
                    className="accent-black-mate"
                  />
                  <label htmlFor={type} className="font-cera-pro font-medium">
                    {type}
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

export default TypeFilter

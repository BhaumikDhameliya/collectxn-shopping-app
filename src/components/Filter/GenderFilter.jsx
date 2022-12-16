import React from 'react'

const genderList = [{ name: 'Men' }, { name: 'Women' }]

const GenderFilter = (props) => {
  const { setGender } = props

  const handleGenderChange = (e) => {
    if (e.target.checked) {
      setGender((prev) => [...prev, e.target.value])
    } else {
      setGender((prev) => prev.filter((b) => b !== e.target.value))
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex pb-3 border-b border-gray-mid">
        <p className="uppercase font-medium ">Gender</p>
      </div>
      <ul className="flex flex-col px-2 py-4 gap-3 text-13">
        {genderList.map(({ name }, index) => {
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
                    onChange={handleGenderChange}
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

export default GenderFilter

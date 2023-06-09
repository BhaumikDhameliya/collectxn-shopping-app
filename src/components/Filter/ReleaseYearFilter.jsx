import React from 'react'

const yearList = [
  { name: '2022' },
  { name: '2021' },
  { name: '2020' },
  { name: '2019' },
]

const RealeaseYearFilter = (props) => {
  const { setReleaseYear } = props

  const handleReleaseYearChange = (e) => {
    if (e.target.checked) {
      setReleaseYear([e.target.value])
    } else {
      setReleaseYear((prev) => prev.filter((b) => b !== e.target.value))
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex pb-3 border-b border-gray-mid">
        <p className="uppercase font-medium ">RELEASE YEARS</p>
      </div>
      <ul className="flex flex-col px-2 py-4 gap-3 text-13">
        {yearList.map(({ name }, index) => {
          return (
            <li key={index}>
              <div className="">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id={name}
                    name="release year"
                    value={name}
                    className="accent-black-mate"
                    onChange={handleReleaseYearChange}
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

export default RealeaseYearFilter

import React from 'react'

const BrandFilter = (props) => {
  const { setBrands, brandList = [] } = props

  const handleBrandChange = (e) => {
    if (e.target.checked) {
      setBrands((prev) => [...prev, e.target.value])
    } else {
      setBrands((prev) => prev.filter((b) => b !== e.target.value))
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex pb-3 border-b border-gray-mid">
        <p className="uppercase font-medium ">Brand</p>
      </div>
      <ul className="flex flex-col px-2 py-4 gap-3 text-13">
        {brandList.map((brand, index) => {
          return (
            <li key={index}>
              <div className="">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={brand}
                    name="brand"
                    value={brand}
                    className="accent-black-mate"
                    onChange={handleBrandChange}
                  />
                  <label htmlFor={brand} className="font-cera-pro font-medium">
                    {brand}
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

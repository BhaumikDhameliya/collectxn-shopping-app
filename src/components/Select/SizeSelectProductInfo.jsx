import React from 'react'

const SizeSelectProductInfo = (props) => {
  const { product, selectedSize, setSelectedSize } = props
  const { SizeAvailabilities } = product
  return (
    <div className="flex flex-col">
      <div className="flex py-1 5 gap-2 items-center justify-between">
        <p className="font-medium">Select size</p>
        <button className="font-medium text-13 border-b">Request size</button>
      </div>
      <ul className="grid items-center justify-center flex-wrap px-2 py-4 gap-3 text-13 tablet:text-base grid-cols-5">
        {SizeAvailabilities.map((sizeProduct) => {
          const { size, id: sizeId } = sizeProduct
          return (
            <li key={sizeId}>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="productSize"
                  id={size}
                  value={size}
                  checked={sizeId === selectedSize?.id}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedSize(sizeProduct)
                    }
                  }}
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

export default SizeSelectProductInfo

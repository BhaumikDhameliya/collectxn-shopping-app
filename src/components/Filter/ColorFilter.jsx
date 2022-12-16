import React from 'react'

// const colorList = [
//   { name: 'Black', color: '#000000' },
//   { name: 'Blue', color: '#396CB4' },
//   { name: 'Brown', color: '#7C482B' },
//   { name: 'Copper', color: '#F4F2F2', border: '1px solid #D2D2D2' },
//   { name: 'Cream', color: '#FCF8F8', border: '1px solid #D2D2D2' },
//   { name: 'Gold', color: '#EBA133' },
//   { name: 'Green', color: '#3BB76C' },
//   { name: 'Grey', color: '#B3B3B3' },
//   {
//     name: 'Multi color',
//     color:
//       'linear-gradient(180deg, #BCD63F 0%, #EF4985 35.94%, #396CB4 65.1%, #3BB76C 100%)',
//   },
//   { name: 'Orange', color: '#EF4949' },
// ]

const ColorFilter = (props) => {
  const { colorList = [], setColors } = props

  const handleColorChange = (e) => {
    if (e.target.checked) {
      setColors((prev) => [...prev, e.target.value])
    } else {
      setColors((prev) => prev.filter((b) => b !== e.target.value))
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex pb-3 border-b border-gray-mid">
        <p className="uppercase font-medium ">Colors</p>
      </div>
      <ul className="grid items-center justify-center flex-wrap px-2 py-4 gap-3 text-13 grid-cols-2 max-w-[254px]">
        {colorList.map((color, index) => {
          return (
            <li key={index}>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={color}
                  name={color}
                  value={color}
                  className="accent-black-mate hidden peer"
                  onChange={handleColorChange}
                />
                <label
                  htmlFor={color}
                  className="font-cera-pro font-medium flex items-center px-2 py-1.5 rounded border border-gray-light peer-checked:bg-black-mate peer-checked:text-white flex-grow gap-[5px]"
                >
                  <div
                    style={{
                      borderRadius: '100px',
                      width: '15px',
                      height: '15px',
                      background: color,
                    }}
                  ></div>
                  <p>{color}</p>
                </label>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ColorFilter

import React from 'react'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

// const priceList = [
//   { name: '₹2500 to ₹4000', count: 265 },
//   { name: '₹4000 to ₹8500', count: 208 },
//   { name: '₹8500 to ₹12000', count: 130 },
//   { name: '₹12000 to ₹20000', count: 25 },
// ]

const priceFilterSchemaResolver = yupResolver(
  yup.object().shape({
    minPrice: yup.string(),
    maxPrice: yup.string(),
  }),
)

const PriceFilter = (props) => {
  const { setMinPrice, setMaxPrice } = props

  const {
    // formState: { errors },
    handleSubmit,
    register,
    // watch,
  } = useForm({
    defaultValues: {},
    resolver: priceFilterSchemaResolver,
  })

  const onSubmit = async (data) => {
    const { minPrice, maxPrice } = data
    if (minPrice) setMinPrice(minPrice)
    if (maxPrice) setMaxPrice(maxPrice)
  }

  return (
    <div className="flex flex-col">
      <div className="flex pb-3 border-b border-gray-mid">
        <p className="uppercase font-medium">PRICE</p>
      </div>
      <div>
        <form
          className="flex gap-3 px-2 pt-4 laptop:max-w-xs text-13"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="number"
            min={0}
            className="flex border border-gray-dark rounded-md p-2 w-16"
            placeholder="Min"
            name="minPrice"
            {...register('minPrice')}
          />
          <input
            type="number"
            min={0}
            className="flex border border-gray-dark rounded-md p-2 w-16"
            placeholder="Max"
            name="maxPrice"
            {...register('maxPrice')}
          />
          <button className="bg-black-mate text-13 flex items-center justify-center px-3 gap-[10px] rounded-full w-full font-medium tablet:text-xl border border-black-mate disabled:bg-gray-mid disabled:shadow-none disabled:text-white hover:shadow-btn hover:bg-punchy-neon hover:text-black-mate text-white max-w-max">
            <span className="text-13">Go</span>
          </button>
        </form>
        {/* <ul className="flex flex-col px-2 py-4 gap-3 text-13">
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
        </ul> */}
      </div>
    </div>
  )
}

export default PriceFilter

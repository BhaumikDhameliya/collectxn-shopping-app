import React from 'react'
import { ArrowLeft, ArrowRight } from 'akar-icons'
import ProductCardScrollable from '../Card/ProductCardScrollable'
import { useRef } from 'react'

const PopularRightNow = () => {
  const scrollRef = useRef()

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      top: 0,
      left: 240,
      behavior: 'smooth',
    })
  }

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      top: 0,
      left: -240,
      behavior: 'smooth',
    })
  }

  return (
    <div className="flex flex-col items-center gap-8 px-1/20">
      <div className="flex justify-between items-center w-full">
        <div className="font-cera-pro font-bold text-2xl ">
          Popular Right Now
        </div>
        <div className="hidden tablet:flex gap-3">
          <button
            className="p-2 border border-black-mate rounded-full"
            onClick={scrollLeft}
          >
            <ArrowLeft />
          </button>
          <button
            className="p-2 border border-black-mate rounded-full"
            onClick={scrollRight}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex items-center gap-6 w-full overflow-x-scroll no-scrollbar pb-1/20"
      >
        <ProductCardScrollable />
        <ProductCardScrollable />
        <ProductCardScrollable />
        <ProductCardScrollable />
        <ProductCardScrollable />
        <ProductCardScrollable />
        <ProductCardScrollable />
        <ProductCardScrollable />
        <ProductCardScrollable />
      </div>
    </div>
  )
}

export default PopularRightNow

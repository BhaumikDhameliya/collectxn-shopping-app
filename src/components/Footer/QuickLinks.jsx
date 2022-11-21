import React from 'react'
import { Link } from 'react-router-dom'

const QuickLinks = () => {
  return (
    <div className="flex w-full gap-12 tablet:justify-around font-medium text-base tablet:text-xl">
      <div className="flex flex-col gap-4">
        <div className="font-cera-pro font-bold text-xs tablet:text-lg text-[#A8A8A8]">
          Quick links
        </div>
        <div>
          <Link to="/">Sneakers</Link>
        </div>
        <div>
          <Link to="/">Apparels</Link>
        </div>
        <div>
          <Link to="/">Jewellary</Link>
        </div>
        <div>
          <Link to="/">Accessories</Link>
        </div>
        <div>
          <Link to="/">Playstation</Link>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="font-cera-pro font-bold text-xs tablet:text-lg text-[#A8A8A8]">
          Company
        </div>
        <div>
          <Link to="/">About us</Link>
        </div>
        <div>
          <Link to="/">Blogs</Link>
        </div>
        <div>
          <Link to="/">Terms</Link>
        </div>
        <div>
          <Link to="/">Privacy</Link>
        </div>
      </div>
    </div>
  )
}

export default QuickLinks

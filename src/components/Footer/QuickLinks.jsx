import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const QuickLinks = () => {
  const navigate = useNavigate()
  const categories = useSelector((state) => state.category.categories)

  return (
    <div className="flex w-full gap-12 tablet:justify-around font-medium text-base tablet:text-xl">
      <div className="flex flex-col gap-4">
        <div className="font-cera-pro font-bold text-xs tablet:text-lg text-[#A8A8A8]">
          Quick links
        </div>
        {Object.entries(categories || {})?.map(([categoryId, category]) => {
          return (
            <div
              key={categoryId}
              onClick={() => {
                navigate(`/category/${categoryId}`)
              }}
            >
              <span>{category?.name}</span>
            </div>
          )
        })}
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

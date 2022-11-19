import React from 'react'

import from_the_magazine_text from '../../assets/img/from_the_magazine_text.png'

import ViewAllArrow from '../../assets/SVGComponent/ViewAllArrow'

import BlogCard from '../Card/BlogCard'

const FromTheMagazineBanner = () => {
  return (
    <div className="bg-black-mate px-1/20 pt-1/10 pb-1/20">
      <div className="pb-9">
        <img
          src={from_the_magazine_text}
          alt="from_the_magazine_text"
          className="m-auto"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="flex gap-6">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>

        <div className="flex items-center py-1 gap-2 text-white">
          <p className="font-medium text-base">View All</p>
          <div className="">
            <ViewAllArrow fill="#FFFFFF" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FromTheMagazineBanner

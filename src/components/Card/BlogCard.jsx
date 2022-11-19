import React from 'react'

import blog_card_image from '../../assets/img/blog_card_image.png'

const BlogCard = () => {
  return (
    <div className="border rounded-lg divide-y bg-white hover:shadow-blog">
      <img src={blog_card_image} alt="blog_card_image" className="m-auto" />
      <div className="flex items-center px-4 py-3 gap-2">
        <p className="font-bold text-xl">
          Fear of God Essentials Hoodie: Collectxn Pick of the Week
        </p>
      </div>
      <div className="flex items-center px-4 py-3 gap-3 text-xs">
        <p>APPAREL</p>
        <p>*</p>
        <p>SEPTEMBER 2, 2022</p>
      </div>
    </div>
  )
}

export default BlogCard

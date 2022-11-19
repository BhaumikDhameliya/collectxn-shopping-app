import React from 'react'

import newsletter_banner_image from '../../assets/img/banner/newsletter_banner_image.png'

import newsletter_badge from '../../assets/svg/newsletter_badge.svg'
import PopButton from '../buttons/PopButton'

import TextInput from '../TextInput'

const NewsletterBanner = () => {
  return (
    <div className="bg-punchy-neon px-1/10 flex">
      <div className="w-1/2">
        <img src={newsletter_banner_image} alt="newsletter_banner_image" />
      </div>
      <div className="flex flex-col gap-4 items-center justify-center py-1/10 pl-1/10">
        <div className="flex flex-col gap-1">
          <div className="flex items-end">
            <div className="font-cera-pro font-semibold text-4xl">
              Signup for
            </div>
            <div className="relative -bottom-1/5 -left-1/20">
              <img src={newsletter_badge} alt="newsletter_badge" />
            </div>
          </div>
          <div className="font-bold text-6xl">NEWSLETTER</div>
          <div>
            Stay update with collectxn on sneaker, streetwears & fashions
          </div>
        </div>
        <div className="flex gap-3 w-full">
          <TextInput placeholder="Your email address" />
          <div>
            <PopButton>Subscribe</PopButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsletterBanner

import React from 'react'

import newsletter_banner_image from '../../assets/img/banner/newsletter_banner_image.png'

import newsletter_badge from '../../assets/svg/newsletter_badge.svg'
import PopButton from '../buttons/PopButton'

import TextInput from '../TextInput'

const NewsletterBanner = () => {
  return (
    <div className="bg-punchy-neon laptop:px-1/10 flex flex-col tablet:flex-row">
      <div className="hidden selection:w-1/2">
        <img src={newsletter_banner_image} alt="newsletter_banner_image" />
      </div>
      <div className="flex flex-col gap-4 items-center justify-center p-4 tablet:py-1/10 tablet:pl-1/10">
        <div className="flex flex-col gap-1">
          <div className="flex items-end">
            <div className="font-cera-pro font-semibold text-2xl laptop:text-4xl">
              Signup for
            </div>
            <div className="relative tablet:-bottom-1/5 tablet:-left-1/20 w-16 -bottom-2 -left-2">
              <img src={newsletter_badge} alt="newsletter_badge" />
            </div>
          </div>
          <div className="font-bold tablet:text-6xl text-4xl">NEWSLETTER</div>
          <div className="text-13 font-semibold">
            Stay update with collectxn on sneaker, streetwears & fashions
          </div>
        </div>
        <div className="flex gap-3 w-full flex-col laptop:flex-row">
          <TextInput placeholder="Your email address" />
          <div className="w-max">
            <PopButton>Subscribe</PopButton>
          </div>
        </div>
      </div>
      <div>
        <img src={newsletter_banner_image} alt="newsletter_banner_image" />
      </div>
    </div>
  )
}

export default NewsletterBanner

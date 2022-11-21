import React from 'react'
import { Link } from 'react-router-dom'

import logo_collectxn_transparent from '../../assets/img/logo_collectxn_transparent.png'
import the_only_gray_mid from '../../assets/img/Footer/the_only_gray_mid.png'
import original_badge from '../../assets/img/Footer/original_badge.png'
import payment_logos from '../../assets/img/payment_logos.png'

import {
  DiscordLogoSVG,
  FacebookLogoSVG,
  InstagramLogoSVG,
  TelegramLogoSVG,
  TwitterLogoSVG,
} from '../../assets/svg/social_media_logos'
import { ReactComponent as OpenAllDaysSVG } from '../../assets/svg/open_all_days.svg'
import { ReactComponent as CallSVG } from '../../assets/svg/call.svg'

const Footer = () => {
  return (
    <div className="bg-black-mate text-white px-4 py-10 flex flex-col gap-12">
      <div className="flex flex-col gap-12">
        <div>
          <img
            src={logo_collectxn_transparent}
            alt="logo_collectxn_transparent"
          />
        </div>
        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-4 font-medium text-base">
              <div className="font-cera-pro font-bold text-xs text-[#A8A8A8]">
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
            <div className="flex flex-col gap-4 font-medium text-base">
              <div className="font-cera-pro font-bold text-xs text-[#A8A8A8]">
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
          <div className="flex flex-col gap-3">
            <p className="font-cera-pro font-bold text-xs text-[#A8A8A8]">
              KEEP IN TOUCH
            </p>
            <div className="flex gap-2">
              <Link to="/">
                <img src={DiscordLogoSVG} alt="DiscordLogoSVG" />
              </Link>
              <Link to="/">
                <img src={FacebookLogoSVG} alt="FacebookLogoSVG" />
              </Link>
              <Link to="/">
                <img src={InstagramLogoSVG} alt="InstagramLogoSVG" />
              </Link>
              <Link to="/">
                <img src={TelegramLogoSVG} alt="TelegramLogoSVG" />
              </Link>
              <Link to="/">
                <img src={TwitterLogoSVG} alt="TwitterLogoSVG" />
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-dark"></div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="font-medium text-xs">
                Ground Floor, 261, Westend Marg, Garden of Five Senses Road,
                Saidulajab, New Delhi - 110074
              </p>
              <div className="flex gap-6">
                <div className="flex items-center gap-1">
                  <OpenAllDaysSVG />
                  <p className="font-medium text-xs">OPEN ALL DAYS</p>
                </div>
                <a className="flex items-center gap-1" href="tel:+919971320019">
                  <CallSVG />
                  <p className="font-medium text-xs">+91-9971320019</p>
                </a>
              </div>
            </div>
          </div>
          <div>
            <img src={payment_logos} alt="payment_logos" />
          </div>
          <div>
            <p className="font-medium text-[10px] text-gray-dark">
              @collectxn. All right reserved.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img
            src={the_only_gray_mid}
            alt="the_only_gray_mid"
            className="w-full"
          />
        </div>
        <div className="flex items-center justify-center">
          <img src={original_badge} alt="original_badge" />
        </div>
      </div>
    </div>
  )
}

export default Footer

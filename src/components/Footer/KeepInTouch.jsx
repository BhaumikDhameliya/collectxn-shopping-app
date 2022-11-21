import React from 'react'
import { Link } from 'react-router-dom'

import {
  DiscordLogoSVG,
  FacebookLogoSVG,
  InstagramLogoSVG,
  TelegramLogoSVG,
  TwitterLogoSVG,
} from '../../assets/svg/social_media_logos'

const KeepInTouch = () => {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-cera-pro font-bold text-xs tablet:text-lg text-[#A8A8A8]">
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
  )
}

export default KeepInTouch

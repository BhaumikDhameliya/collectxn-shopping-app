import React from 'react'

import logo_collectxn_white from '../../assets/svg/logo/logo_collectxn_white.svg'
import payment_logos from '../../assets/svg/footer/payment_logos.svg'

import { ReactComponent as OpenAllDaysSVG } from '../../assets/svg/open_all_days.svg'
import { ReactComponent as CallSVG } from '../../assets/svg/call.svg'
import KeepInTouch from './KeepInTouch'
import QuickLinks from './QuickLinks'
import TheOnlyPlug from './TheOnlyPlug'

const Footer = () => {
  return (
    <div className="bg-black-mate text-white px-4 py-10 tablet:px-8 tablet:py-16 laptop:p-20 flex flex-col gap-12">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-12 laptop:flex-row laptop:justify-between">
          <div className="flex flex-col gap-12 tablet:flex-row laptop:w-full laptop:max-w-[50%]">
            <div>
              <div className="tablet:flex tablet:flex-col gap-12">
                <img src={logo_collectxn_white} alt="logo_collectxn_white" />
                <div className="hidden tablet:block">
                  <KeepInTouch />
                </div>
              </div>
            </div>
            <QuickLinks />
            <div className="tablet:hidden">
              <KeepInTouch />
            </div>
          </div>
          <div className="hidden laptop:block flex-grow max-w-[50%] laptop:transform laptop:translate-x-20 -translate-y-12">
            <TheOnlyPlug />
          </div>
        </div>
        <div className="border-t border-gray-dark"></div>
        <div className="flex flex-col gap-12 laptop:flex-row laptop:justify-between">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 text-xs tablet:text-xl">
              <p className="font-medium max-w-[626px]">
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
          <div className="flex flex-col gap-12">
            <div>
              <img src={payment_logos} alt="payment_logos" />
            </div>
            <div>
              <p className="font-medium text-[10px] tablet:text-xl text-gray-dark">
                @collectxn. All right reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="laptop:hidden">
        <TheOnlyPlug />
      </div>
    </div>
  )
}

export default Footer

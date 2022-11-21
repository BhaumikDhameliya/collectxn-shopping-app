import React from 'react'

import { Link } from 'react-router-dom'

import LogoCollectionTransparent from '../../assets/img/logo_collectxn_transparent.png'
// import logo_collectxn_black from '../../assets/img/logo_collectxn_black.png'
// import logo_cxn_black from '../../assets/img/logo_cxn_black.png'
import logo_cxn_white from '../../assets/img/logo_cxn_white.png'

import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'
import { ReactComponent as ShoppingBagIcon } from '../../assets/svg/shopping_bag.svg'
import { ReactComponent as UserIcon } from '../../assets/svg/user.svg'
import { ReactComponent as MobileMenuSVG } from '../../assets/svg/mobile_menu_icon.svg'

const Navbar = () => {
  return (
    <nav className="absolute flex justify-between items-center p-4 tablet:px-20 tablet:py-6 w-full overflow-auto no-scrollbar">
      <Link to="/" className="flex-none">
        <div className="hidden laptop:hidden">
          <img src={LogoCollectionTransparent} alt="collection logo" />
        </div>
        <div className="">
          <img src={logo_cxn_white} alt="collection logo" />
        </div>
      </Link>
      <div className="hidden">
        <ul className="flex gap-8 text-white font-bold text-base whitespace-nowrap">
          <li className="flex py-[6px] px-3 gap-[10px] rounded-[4px]">
            <Link to="/" className="">
              New Release
            </Link>
          </li>
          <li className="flex py-[6px] px-3 gap-[10px] rounded-[4px]">
            <Link to="/sneakers" className="">
              Sneakers
            </Link>
          </li>
          <li className="flex py-[6px] px-3 gap-[10px] rounded-[4px]">
            <Link to="/apparels" className="">
              Apparels
            </Link>
          </li>
          <li className="flex py-[6px] px-3 gap-[10px] rounded-[4px]">
            <Link to="/jewellery" className="">
              Jewellery
            </Link>
          </li>
          <li className="flex py-[6px] px-3 gap-[10px] rounded-[4px]">
            <Link to="/" className="">
              Play station
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-[10px]">
          <SearchIcon />
          <div className="hidden">
            <input
              className="bg-transparent outline-none text-white font-medium text-base w-14"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex gap-3">
          <ShoppingBagIcon />
          <div className="hidden">
            <Link to="/auth/login">
              <UserIcon />
            </Link>
          </div>
        </div>
        <button>
          <MobileMenuSVG />
        </button>
      </div>
    </nav>
  )
}

export default Navbar

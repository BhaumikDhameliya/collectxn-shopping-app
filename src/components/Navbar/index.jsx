import React from 'react'

import { Link } from 'react-router-dom'

import LogoCollectionTransparent from '../../assets/img/logo_collectxn_transparent.png'

import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'
import { ReactComponent as ShoppingBagIcon } from '../../assets/svg/shopping_bag.svg'
import { ReactComponent as UserIcon } from '../../assets/svg/user.svg'

const Navbar = () => {
  return (
    <nav className="absolute flex justify-between items-center px-20 py-6 gap-32 w-full overflow-auto no-scrollbar">
      <Link to="/" className="flex-none">
        <img src={LogoCollectionTransparent} alt="collection logo" />
      </Link>
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
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-[10px]">
          <SearchIcon />
          <input
            className="bg-transparent outline-none text-white font-medium text-base w-14"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex gap-3">
          <ShoppingBagIcon />
          <Link to="/auth/login">
            <UserIcon />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

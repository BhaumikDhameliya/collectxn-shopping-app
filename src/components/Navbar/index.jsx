import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'

import LogoCollectionTransparent from '../../assets/img/logo_collectxn_transparent.png'
import logo_collectxn_black from '../../assets/img/logo_collectxn_black.png'
import logo_cxn_black from '../../assets/img/logo_cxn_black.png'
import logo_cxn_white from '../../assets/img/logo_cxn_white.png'

import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'
import { ReactComponent as ShoppingBagIcon } from '../../assets/svg/shopping_bag.svg'
import { ReactComponent as UserIcon } from '../../assets/svg/user.svg'
import { ReactComponent as MobileMenuSVG } from '../../assets/svg/mobile_menu_icon.svg'
import { ReactComponent as CloseMobileMenuSVG } from '../../assets/svg/close_mobile_menu.svg'
import UserSVG from '../../assets/SVGComponent/UserSVG'
import SearchMenu from '../Menu/SearchMenu'
import { getCategories } from '../../api/categories.api'

import { setCategories } from '../../features/category/categorySlice'

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()

  const [showMenu, setShowMenu] = useState(false)
  const [showSearchMenu, setShowSearchMenu] = useState(false)
  const [categoryList, setCategoryList] = useState([])

  const toggleSearchMenu = () => setShowSearchMenu((prev) => !prev)
  const goToShoppingBag = () => navigate('/shopping-bag')

  const gotoProfile = () => {
    setShowMenu(false)
    navigate('/profile')
  }

  const getCategoryData = useCallback(async () => {
    const res = await getCategories()
    const catList = res?.data?.categories
    if (catList) {
      let categories = {}
      catList.forEach((cat) => {
        categories[cat.id] = cat
      })
      dispatch(setCategories(categories))
      setCategoryList(catList)
    }
  }, [dispatch])

  useEffect(() => {
    getCategoryData()
  }, [getCategoryData])

  return (
    <>
      <nav
        className={`absolute h-16.5 tablet:h-22 p-4 tablet:px-8 laptop:px-20 tablet:py-6 w-full overflow-auto no-scrollbar z-10 ${
          showMenu ? 'bg-white' : 'bg-black-mate'
        }`}
      >
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center justify-between flex-grow">
            <Link to="/" className="flex-none">
              <div className="flex-none tablet:hidden">
                {showMenu ? (
                  <img
                    src={logo_cxn_black}
                    alt="collection logo"
                    className="h-7"
                  />
                ) : (
                  <img
                    src={logo_cxn_white}
                    alt="collection logo"
                    className="h-7"
                  />
                )}
              </div>
              <div className="hidden tablet:flex flex-none">
                {showMenu ? (
                  <img src={logo_collectxn_black} alt="collection logo" />
                ) : (
                  <img src={LogoCollectionTransparent} alt="collection logo" />
                )}
              </div>
            </Link>
            {!showMenu && (
              <>
                <div className="hidden laptop:block">
                  <ul className="flex gap-8 text-white font-bold text-base whitespace-nowrap">
                    {categoryList?.map((cat) => {
                      return (
                        <li
                          className={`flex py-[6px] px-3 gap-[10px] rounded-[4px] ${
                            // eslint-disable-next-line eqeqeq
                            params?.categoryId == cat?.id
                              ? 'border-b-5 border-punchy-neon'
                              : ''
                          }`}
                          onClick={() => {
                            navigate(`/category/${cat.id}`)
                          }}
                          key={cat?.name}
                        >
                          <span className="">{cat?.name}</span>
                        </li>
                      )
                    })}
                    {/* <li className="flex py-[6px] px-3 gap-[10px] rounded-[4px]">
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
                    </li> */}
                  </ul>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-[10px]">
                    <button onClick={toggleSearchMenu} className="flex gap-2.5">
                      <SearchIcon />
                      <div className="hidden laptop:block">
                        <span className="text-white font-medium">Search</span>
                      </div>
                    </button>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={goToShoppingBag}>
                      <ShoppingBagIcon />
                    </button>
                    <div className="hidden tablet:block">
                      <Link to="/profile">
                        <UserIcon />
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="laptop:hidden">
            {showMenu ? (
              <button onClick={() => setShowMenu(false)}>
                <CloseMobileMenuSVG />
              </button>
            ) : (
              <button onClick={() => setShowMenu(true)}>
                <MobileMenuSVG />
              </button>
            )}
          </div>
        </div>
        {showMenu && (
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center px-3 py-4 gap-2">
              <p className="font-cera-pro font-semibold">Sneakers</p>
            </div>
            <div className="flex items-center justify-center px-3 py-4 gap-2">
              <p className="font-cera-pro font-semibold">Apparels</p>
            </div>
            <div className="flex items-center justify-center px-3 py-4 gap-2">
              <p className="font-cera-pro font-semibold">Jewellary</p>
            </div>
            <div className="flex items-center justify-center px-3 py-4 gap-2">
              <p className="font-cera-pro font-semibold">PlayStation</p>
            </div>
            <div className="flex items-center justify-center px-3 py-4 gap-2 tablet:hidden">
              <p className="font-cera-pro font-semibold">
                <button
                  className="flex items-center px-3 py-2 gap-2 bg-punchy-neon border rounded-3xl"
                  onClick={gotoProfile}
                >
                  <UserSVG fill="#000000" />
                  <p>Profile</p>
                </button>
              </p>
            </div>
          </div>
        )}
      </nav>

      {showSearchMenu && (
        <div className="pt-16.5 tablet:pt-22">
          <SearchMenu toggleSearchMenu={toggleSearchMenu} />
        </div>
      )}
    </>
  )
}

export default Navbar

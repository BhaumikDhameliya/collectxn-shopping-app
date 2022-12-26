import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Minus, Plus, ArrowLeft, ArrowRight, Heart } from 'akar-icons'

import air_max from '../assets/img/air_max_flyknit_racer_shoes.png'
// import zestImage from '../assets/img/zest.png'
import logo_cxn_black from '../assets/svg/logo/logo_cxn_black.svg'
// import product_image_1 from '../assets/img/ProductImage/product_image_1.png'
// import product_image_2 from '../assets/img/ProductImage/product_image_2.png'
// import product_image_3 from '../assets/img/ProductImage/product_image_3.png'
// import product_image_4 from '../assets/img/ProductImage/product_image_4.png'
// import product_image_5 from '../assets/img/ProductImage/product_image_5.png'
// import product_image_6 from '../assets/img/ProductImage/product_image_6.png'

// import { ReactComponent as HeartSVG } from '../assets/svg/heart.svg'
// import { ReactComponent as GetItBySVG } from '../assets/svg/get_it_by.svg'
import { ReactComponent as PayOnDeliverySVG } from '../assets/svg/pay_on_delivery.svg'

import PopButton from '../components/buttons/PopButton'
import TextInput from '../components/Input/TextInput'
import BecomeACollectxrBanner from '../components/Banners/BecomeACollectxrBanner'
import Breadcrumbs from '../components/Breadcrumbs'
import { getProductDetails, removeLikedProduct } from '../api/products.api'
import {
  removeProductFromWishlist,
  setProductDetail,
} from '../features/product/productSlice'
import SizeSelectProductInfo from '../components/Select/SizeSelectProductInfo'
import RelatedProducts from '../features/product/RelatedProducts'
import { addToCart } from '../api/cart.api'
import { likeProduct } from '../api/products.api'
import { toast } from 'react-toastify'
import { addProductToCart } from '../features/cart/cartSlice'

const ProductInfo = () => {
  const dispatch = useDispatch()
  const { productId } = useParams()

  const product = useSelector((state) => state.product.products?.[productId])
  // console.log('Product-----', product)

  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState()
  const [selectedSize, setSelectedSize] = useState()
  const [isLiked, setIsLiked] = useState(false)

  const increaseQuantity = () => setQuantity((prev) => prev + 1)
  const decreaseQuantity = () => setQuantity((prev) => prev - 1)

  const handleAddtoCart = async () => {
    if (!selectedColor) {
      toast.error('Please select color')
      return
    }
    if (!selectedSize) {
      toast.error('Please select size')
      return
    }
    const cartRes = await addToCart({
      quantity: quantity,
      ProductId: productId,
      color: selectedColor?.color,
      size: selectedSize?.size,
    })
    const cartItem = cartRes?.data?.cartItem
    if (cartItem) {
      toast.success('Product added to cart')
      dispatch(addProductToCart(cartItem))
    }
  }

  const getCategoryProuductsData = useCallback(async () => {
    const res = await getProductDetails(productId)
    const product = res?.data?.product
    if (product) {
      dispatch(setProductDetail({ productId, product }))
    }
  }, [productId, dispatch])

  const handleLikeProduct = async () => {
    const res = await likeProduct({}, { ProductId: product.id })
    if (res?.data?.isLiked) {
      setIsLiked(true)
      // toast.success('Product liked successfully')
    }
  }

  const handleRemoveLikeProduct = async () => {
    const res = await removeLikedProduct({ ProductId: product.id })
    if (res?.data?.isRemoved) {
      setIsLiked(false)
      dispatch(removeProductFromWishlist(product))
      // toast.success('like removed successfully')
    }
  }

  useEffect(() => {
    setIsLiked(product?.isLiked || false)
  }, [product])

  useEffect(() => {
    getCategoryProuductsData()
  }, [getCategoryProuductsData])

  useEffect(() => {
    const selColor = product?.ColorAvailabilities?.[0]
    if (selColor) {
      setSelectedColor(selColor)
    }
  }, [product?.ColorAvailabilities])

  useEffect(() => {
    const selSize = selectedColor?.SizeAvailabilities?.[0]
    if (selSize) {
      setSelectedSize(selSize)
    }
  }, [selectedColor])

  return (
    <div>
      <div className="relative laptop:hidden">
        <img src={air_max} alt="air_max" className="w-full" />
        <div className="flex gap-3 absolute right-4 bottom-4 tablet:right-8 tablet:bottom-8">
          <div className="p-2 border border-black-mate rounded-full">
            <ArrowLeft />
          </div>
          <div className="p-2 border border-black-mate rounded-full">
            <ArrowRight />
          </div>
        </div>
        <div className="absolute opacity-20 left-4 bottom-4 tablet:left-8 tablet:bottom-8">
          <img src={logo_cxn_black} alt="logo_cxn_black" />
        </div>
      </div>
      <Breadcrumbs
        path={[
          { text: 'home', to: '/' },
          {
            text: product?.Category?.name || '',
            to: `/category/${product?.CategoryId}`,
          },
          { text: product?.name },
        ]}
      />
      <div className="flex px-20 justify-between">
        <div className="hidden laptop:flex items-start justify-center flex-grow">
          {product?.ProductImages?.length === 1 ? (
            <div className="relative flex items-center justify-center rounded-md bg-gray-100 flex-grow">
              <img
                src={product?.ProductImages?.[0]?.image}
                alt={product?.ProductImages?.[0]?.image}
                className="rounded-md w-full"
              />
              <div className="absolute opacity-20 left-4 bottom-4 tablet:left-8 tablet:bottom-8">
                <img src={logo_cxn_black} alt="logo_cxn_black" />
              </div>
            </div>
          ) : (
            <div className="hidden laptop:grid grid-cols-2 gap-4">
              {product?.ProductImages?.map((prImage) => {
                return (
                  <div
                    className="relative flex items-center justify-center rounded-md bg-gray-100 max-w-sm"
                    key={prImage?.image}
                  >
                    <img
                      src={prImage?.image}
                      alt={prImage?.image}
                      height={450}
                      className="rounded-md"
                    />
                    <div className="absolute opacity-20 left-4 bottom-4 tablet:left-8 tablet:bottom-8">
                      <img src={logo_cxn_black} alt="logo_cxn_black" />
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
        <div className="flex flex-col px-4 py-6 gap-10 laptop:w-2/5">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-center gap-10">
              <div className="flex flex-col pb-8 gap-6 border-b border-gray-mid w-full">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3 font-medium text-13 text-gray-dark">
                    <p>{product?.brand}</p>
                    <p>|</p>
                    <p>Release year {product?.releaseYear}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-10">
                      <p className="font-bold text-2xl">{product?.name}</p>
                      {isLiked ? (
                        <button className="" onClick={handleRemoveLikeProduct}>
                          <Heart
                            strokeWidth={0}
                            size={20}
                            className="fill-pink"
                          />
                        </button>
                      ) : (
                        <button className="" onClick={handleLikeProduct}>
                          <Heart strokeWidth={2.5} size={20} />
                        </button>
                      )}
                    </div>
                    {/* <div className="flex items-center gap-2">
                      <p className="font-medium text-gray-dark text-13">
                        3 interest-free payments of ₹ 2166 with{' '}
                      </p>
                      <img src={zestImage} alt="zestImage" />
                    </div> */}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 5">
                      <div className="flex items-end gap-2 5">
                        <p className="font-medium tablet:text-xl">
                          ₹ {selectedSize?.price || product?.price || 0}
                        </p>
                        <p className="text-10 tablet:text-13 line-through text-gray-dark">
                          ₹{' '}
                          {selectedSize?.displayPrice ||
                            product?.displayPice ||
                            0}
                        </p>
                      </div>
                      <p className="font-bold text-pink">
                        (
                        {selectedSize?.discountPercent ||
                          product?.discountPercent ||
                          0}
                        % off)
                      </p>
                    </div>
                    <p className="font-bold text-10 text-green">
                      Inclusive of all taxes
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col pb-10 gap-8 border-b border-gray-light w-full">
                {product?.ColorAvailabilities?.length && (
                  <div className="flex gap-3">
                    {product.ColorAvailabilities.map((prd) => {
                      const { id: colorId, color } = prd
                      return (
                        <div className="" key={colorId}>
                          <input
                            type="radio"
                            id={colorId}
                            name="productColor"
                            className="hidden peer"
                            value={colorId}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedColor(prd)
                              }
                            }}
                            checked={colorId === selectedColor?.id}
                          />
                          <label htmlFor={colorId}>
                            <img
                              src={prd?.image || air_max}
                              alt={color}
                              className={`w-15 rounded-md ${
                                colorId === selectedColor?.id ? 'border' : ''
                              }`}
                            />
                          </label>
                        </div>
                      )
                    })}
                  </div>
                )}
                {selectedColor && (
                  <SizeSelectProductInfo
                    {...{
                      selectedSize,
                      setSelectedSize,
                      product: selectedColor,
                    }}
                  />
                )}
                <div className="flex items-center gap-3">
                  <p className="font-medium">Select Quantity</p>
                  <div className="flex items-center p-2 gap-2 bg-white border rounded-full">
                    <button disabled={quantity < 2} onClick={decreaseQuantity}>
                      <Minus
                        size={12}
                        color={quantity < 2 ? '#B3B3B3' : '#161617'}
                      />
                    </button>
                    <p>{quantity}</p>
                    <button onClick={increaseQuantity}>
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <PopButton btnClasses="bg-black-mate">Buy Now</PopButton>
                  <PopButton variant="outline" onClick={handleAddtoCart}>
                    Add to Bag
                  </PopButton>
                </div>
              </div>
            </div>
            <div className="flex flex-col pb-6 gap-5 border-b border-gray-light">
              <p className="font-bold text-lg">DELIVERY OPTIONS</p>
              <div className="flex flex-col gap-3">
                <div>
                  <TextInput
                    placeholder="Enter a PIN code"
                    buttonText="ADD"
                    onButtonClick={() => {}}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  {/* <div className="flex items-center gap-1 5">
                    <GetItBySVG />
                    <p className="font-cera-pro font-medium">
                      Get it by Sun, Sep 18
                    </p>
                  </div> */}
                  {product?.allowPayOnDelivery && (
                    <div className="flex items-center gap-1 5">
                      <PayOnDeliverySVG />
                      <p className="font-cera-pro font-medium">
                        Pay on delivery available
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold text-lg">PRODUCT DESCRIPTION</p>
            <div className="flex flex-col gap-6 ont-cera-pro">
              <p className="">{product?.description}</p>
              {/* <div>
                <p className="font-bold">More Benefits</p>
                <ul className="list-disc pl-6">
                  <li>
                    See-through leno-weave upper is strong and
                    ultra-lightweight.
                  </li>
                  <li>
                    Wraparound ribbon of plastic helps to reinforce the
                    materials.
                  </li>
                  <li>Lace lock is inspired by the Air Jordan 6.</li>
                  <li>Colour Shown: Black/White/Metallic Gold</li>
                  <li>Style: DH0832-071</li>
                  <li>Country/Region of Origin: Vietnam</li>
                </ul>
              </div> */}
              <div>
                <p className="font-bold">Product Policy</p>
                <p className="">{product?.policy}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts />
      <BecomeACollectxrBanner />
    </div>
  )
}

export default ProductInfo

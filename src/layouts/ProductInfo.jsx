import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Minus, Plus, ArrowLeft, ArrowRight } from 'akar-icons'

import air_max from '../assets/img/air_max_flyknit_racer_shoes.png'
import zestImage from '../assets/img/zest.png'
import logo_cxn_black from '../assets/img/logo_cxn_black.png'
// import product_image_1 from '../assets/img/ProductImage/product_image_1.png'
// import product_image_2 from '../assets/img/ProductImage/product_image_2.png'
// import product_image_3 from '../assets/img/ProductImage/product_image_3.png'
// import product_image_4 from '../assets/img/ProductImage/product_image_4.png'
// import product_image_5 from '../assets/img/ProductImage/product_image_5.png'
// import product_image_6 from '../assets/img/ProductImage/product_image_6.png'

import { ReactComponent as HeartSVG } from '../assets/svg/heart.svg'
import { ReactComponent as GetItBySVG } from '../assets/svg/get_it_by.svg'
import { ReactComponent as PayOnDeliverySVG } from '../assets/svg/pay_on_delivery.svg'

import PopButton from '../components/buttons/PopButton'
import TextInput from '../components/Input/TextInput'
import BecomeACollectxrBanner from '../components/Banners/BecomeACollectxrBanner'
import ProductCardScrollable from '../components/Card/ProductCardScrollable'
import Breadcrumbs from '../components/Breadcrumbs'
import { getProductDetails } from '../api/products.api'
import { setProductDetail } from '../features/product/productSlice'

const sizeList = [
  { name: '3' },
  { name: '3.5' },
  { name: '4' },
  { name: '4.5' },
  { name: '5' },
  { name: '5.5' },
  { name: '6' },
  { name: '6.5' },
  { name: '7' },
  { name: '7.5' },
  { name: '8' },
  { name: '8.5' },
  { name: '9' },
  { name: '9.5' },
  { name: '10' },
  { name: '10.5' },
  { name: '11' },
  { name: '11.5' },
  { name: '12' },
  { name: '12.5' },
  { name: '13' },
  { name: '13.5' },
  { name: '14' },
  { name: '14.5' },
  { name: '15' },
  { name: '15.5' },
  { name: '16' },
  { name: '16.5' },
  { name: '17' },
  { name: '17.5' },
  { name: '18' },
  { name: '18.5' },
  { name: '19' },
  { name: '19.5' },
  { name: '20' },
]

const ProductInfo = () => {
  const dispatch = useDispatch()
  const { productId } = useParams()

  const product = useSelector((state) => state.product.products?.[productId])
  console.log('Product-----', product)

  const [quantity, setQuantity] = useState(1)

  const increaseQuantity = () => setQuantity((prev) => prev + 1)
  const decreaseQuantity = () => setQuantity((prev) => prev - 1)

  const getCategoryProuductsData = useCallback(async () => {
    const res = await getProductDetails(productId)
    const product = res?.data?.product
    if (product) {
      dispatch(setProductDetail({ productId, product }))
    }
  }, [productId, dispatch])

  useEffect(() => {
    getCategoryProuductsData()
  }, [getCategoryProuductsData])

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
            text: product?.Category?.name,
            to: `/category/${product?.CategoryId}`,
          },
          { text: product?.name },
        ]}
      />
      <div className="flex px-20 justify-between">
        <div className="hidden laptop:flex items-start justify-center">
          <div className="hidden laptop:grid grid-cols-2 gap-4">
            {product?.ProductImages?.map((prImage) => {
              return (
                <div className="relative flex items-center justify-center rounded-md bg-gray-100">
                  <img
                    src={prImage?.image}
                    alt={prImage?.image}
                    height={450}
                    className="rounded-md max-w-sm"
                  />
                  <div className="absolute opacity-20 left-4 bottom-4 tablet:left-8 tablet:bottom-8">
                    <img src={logo_cxn_black} alt="logo_cxn_black" />
                  </div>
                </div>
              )
            })}
          </div>
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
                      <HeartSVG />
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
                          ₹ {product?.price}
                        </p>
                        <p className="text-10 tablet:text-13 line-through text-gray-dark">
                          ₹ {product?.displayPice}
                        </p>
                      </div>
                      <p className="font-bold text-pink">
                        ({product?.discountPercent || 0}% off)
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
                      const { color } = prd
                      return (
                        <div className="">
                          <input
                            type="checkbox"
                            id={color}
                            name={color}
                            className="hidden peer"
                          />
                          <label
                            htmlFor={color}
                            className="w-15 rounded-md border"
                          >
                            <img
                              src={air_max}
                              alt="air_max"
                              className="w-15 rounded-md"
                            />
                          </label>
                        </div>
                      )
                    })}
                  </div>
                )}
                <div className="flex flex-col">
                  <div className="flex py-1 5 gap-2 items-center justify-between">
                    <p className="font-medium">Select size</p>
                    <button className="font-medium text-13 border-b">
                      Request size
                    </button>
                  </div>
                  <ul className="grid items-center justify-center flex-wrap px-2 py-4 gap-3 text-13 tablet:text-base grid-cols-5">
                    {sizeList.map(({ name }, index) => {
                      return (
                        <li key={index}>
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              id={name}
                              name={name}
                              value={name}
                              className="accent-black-mate hidden peer"
                            />
                            <label
                              htmlFor={name}
                              className="font-cera-pro font-medium flex items-center justify-center px-2 py-1.5 rounded border border-gray-light peer-checked:bg-black-mate peer-checked:text-white flex-grow"
                            >
                              {name}
                            </label>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
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
                  <PopButton type="outline">Add to Bag</PopButton>
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
                  <div className="flex items-center gap-1 5">
                    <GetItBySVG />
                    <p className="font-cera-pro font-semibold">
                      Get it by Sun, Sep 18
                    </p>
                  </div>
                  {product?.allowPayOnDelivery && (
                    <div className="flex items-center gap-1 5">
                      <PayOnDeliverySVG />
                      <p className="font-cera-pro font-semibold">
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
              <p className="">
                From the perimeter to the hoop, take the court with confidence.
                This is one of the lightest Air Jordan game shoes to date, with
                a minimal but durable leno-weave upper reinforced with tough
                plastic details. Meanwhile, Zoom Air cushioning delivers energy
                return and elite responsiveness. The game asks for
                everything—now you have the shoe to match.
              </p>
              <div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 laptop:gap-8 px-1/20 my-16">
        <div className="flex justify-between items-center w-full">
          <div className="font-cera-pro font-bold text-2xl ">
            Product you might like
          </div>
        </div>
        <div className="flex items-center gap-6 w-full overflow-x-scroll no-scrollbar pb-1/20">
          <ProductCardScrollable />
          <ProductCardScrollable />
          <ProductCardScrollable />
          <ProductCardScrollable />
          <ProductCardScrollable />
        </div>
      </div>
      <BecomeACollectxrBanner />
    </div>
  )
}

export default ProductInfo

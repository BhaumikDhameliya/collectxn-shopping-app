import { Heart } from 'akar-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { likeProduct, removeLikedProduct } from '../../api/products.api'

import air_max from '../../assets/img/air_max_flyknit_racer_shoes.png'

// import { ReactComponent as Heart } from '../../assets/svg/heart.svg'
import ViewAllArrow from '../../assets/SVGComponent/ViewAllArrow'

const ProductCard = (props) => {
  const { product, isLiked } = props

  const handleLikeProduct = async () => {
    const res = await likeProduct({}, { ProductId: product.id })
    debugger
    if (res?.data?.isLiked) {
      toast.success('Product liked successfully')
    }
  }

  const handleRemoveLikeProduct = async () => {
    const res = await removeLikedProduct({}, { ProductId: product.id })
    debugger
    if (res?.status === 200) {
      toast.success('like removed successfully')
    }
  }

  return (
    <div className="flex flex-col border rounded laptop:rounded-lg divide-y hover:shadow-card max-w-39 laptop:max-w-74">
      <div className="rounded-t-lg relative">
        <Link to={`/product/${product?.id}`}>
          <img
            src={product?.ProductImages?.[0]?.image || air_max}
            alt={product?.name}
            className="rounded-t-lg m-auto max-h-39 max-w-39 laptop:max-h-74 laptop:max-w-74"
          />
        </Link>
        {isLiked ? (
          <button
            className="laptop:hidden absolute top-3 right-3"
            onClick={handleRemoveLikeProduct}
          >
            <Heart strokeWidth={0} size={20} className="fill-pink" />
          </button>
        ) : (
          <button
            className="laptop:hidden absolute top-3 right-3"
            onClick={handleLikeProduct}
          >
            <Heart strokeWidth={2.5} size={20} />
          </button>
        )}
      </div>
      <div className="flex items-center justify-between p-2 laptop:py-3 laptop:px-4 gap-2">
        <div className="flex font-bold text-13 laptop:text-xl">
          {product?.name}
        </div>
        {false ? (
          <button
            className="hidden laptop:block"
            onClick={handleRemoveLikeProduct}
          >
            <Heart strokeWidth={0} size={20} className="fill-pink" />
          </button>
        ) : (
          <button className="hidden laptop:block" onClick={handleLikeProduct}>
            <Heart strokeWidth={2.5} size={20} />
          </button>
        )}
      </div>
      <div className="flex items-center divide-x text-13 laptop:text-xl">
        <div className="flex items-end p-2 laptop:py-3 laptop:px-4 gap-2 rounded-bl-lg whitespace-nowrap w-1/2">
          <p className="font-medium">₹ {product?.price}</p>
          <p className="text-10 laptop:text-sm line-through text-gray-dark">
            ₹ {product?.displayPrice}
          </p>
        </div>
        <button className="hidden laptop:flex justify-center items-center py-3 px-4 gap-2 rounded-br-lg w-1/2">
          <div className="font-medium text-xl  whitespace-nowrap">
            Add to Bag
          </div>
          <div>
            <ViewAllArrow />
          </div>
        </button>
      </div>
    </div>
  )
}

export default ProductCard

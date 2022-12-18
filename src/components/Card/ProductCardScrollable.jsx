import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// import { toast } from 'react-toastify'
import { Heart } from 'akar-icons'

import air_max from '../../assets/img/air_max_flyknit_racer_shoes.png'

// import { ReactComponent as Heart } from '../../assets/svg/heart.svg'
import ViewAllArrow from '../../assets/SVGComponent/ViewAllArrow'

import { likeProduct, removeLikedProduct } from '../../api/products.api'

const ProductCardScrollable = (props) => {
  const { product } = props
  const [isLiked, setIsLiked] = useState(false)

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
      // toast.success('like removed successfully')
    }
  }

  useEffect(() => {
    setIsLiked(product?.isLiked || false)
  }, [product])

  return (
    <div className="flex flex-col border rounded-lg divide-y hover:shadow-card flex-none max-w-55 laptop:max-w-96">
      <div className="rounded-t-lg relative">
        <Link to={`/product/${product?.id}`}>
          <img
            src={product?.ProductImages?.[0]?.image || air_max}
            alt={product?.name}
            className="rounded-t-lg m-auto h-55 w-55 laptop:h-96 laptop:w-96"
          />
        </Link>
      </div>
      <div className="flex items-center justify-between p-2 laptop:py-3 laptop:px-4 gap-2">
        <div className="flex font-bold text-xs laptop:text-xl">
          {product?.name}
        </div>
        {isLiked ? (
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
      <div className="flex flex-col laptop:flex-row items-center divide-y laptop:divide-y-0 laptop:divide-x text-xs laptop:text-xl">
        <div className="flex items-end p-2 laptop:py-3 laptop:px-4 gap-2 rounded-bl-lg whitespace-nowrap flex-grow w-full laptop:w-1/2">
          <p className="font-medium">₹ {product?.price}</p>
          <p className="text-10 laptop:text-sm line-through text-gray-dark">
            ₹ {product?.displayPrice}
          </p>
        </div>
        <div className="flex justify-center items-center gap-2 p-2 laptop:py-3 laptop:px-4 rounded-br-lg w-full laptop:w-1/2">
          <div className="font-medium whitespace-nowrap">Add to Bag</div>
          <div>
            <ViewAllArrow />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCardScrollable

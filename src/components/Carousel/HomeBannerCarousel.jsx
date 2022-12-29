import React from 'react'

import { Carousel } from 'react-responsive-carousel'
import HomeBanner from '../Banners/HomeBanner'

const HomeBannerCarousel = () => {
  return (
    <Carousel
      statusFormatter={() => {}}
      infiniteLoop
      showThumbs={false}
      preventMovementUntilSwipeScrollTolerance={true}
      showArrows={false}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
              className="inline-block mx-0.5 tablet:mx-1 laptop:mx-2"
            >
              <div className="h-0.5 tablet:h-1 laptop:h-2 w-4 tablet:w-8 laptop:w-16 bg-punchy-neon rounded-full"></div>
            </li>
          )
        }
        return (
          <li
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
            className="inline-block mx-0.5 tablet:mx-1 laptop:mx-2"
          >
            <div className="h-0.5 tablet:h-1 laptop:h-2 w-4 tablet:w-8 laptop:w-16 bg-gray-light rounded-full opacity-50"></div>
          </li>
        )
      }}
    >
      {[1, 2, 3, 4].map((index) => {
        return <HomeBanner key={index} />
      })}
    </Carousel>
  )
}

export default HomeBannerCarousel

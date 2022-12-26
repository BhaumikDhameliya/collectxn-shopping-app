import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import { ReactComponent as StarSVG } from '../../assets/svg/star.svg'
import { ReactComponent as StarHalfSVG } from '../../assets/svg/star_half.svg'
import { ReactComponent as ArrowSVG } from '../../assets/svg/arrow.svg'

import review_user from '../../assets/img/review_user.png'

import PopButton from '../buttons/PopButton'

const arrowStyles = {
  position: 'absolute',
  zIndex: 2,
  top: 'calc(50% - 15px)',
  width: 30,
  height: 30,
  cursor: 'pointer',
}

const indicatorStyles = {
  background: '#fff',
  display: 'inline-block',
  margin: '0 8px',
}

const UserReviewCarousel = () => {
  return (
    <Carousel
      infiniteLoop
      showThumbs={false}
      statusFormatter={() => {}}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, left: 80 }}
          >
            <div className="hidden laptop:flex items-center justify-center">
              <div className="p-2 border border-black-mate rounded-full bg-white">
                <ArrowSVG />
              </div>
            </div>
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, right: 80 }}
          >
            <div className="hidden laptop:flex items-center justify-center">
              <div className="p-2 border border-black-mate rounded-full bg-white rotate-180">
                <ArrowSVG />
              </div>
            </div>
          </button>
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              style={{ ...indicatorStyles }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            >
              <div className="w-6 h-3 bg-punchy-neon border rounded-full shadow-black110"></div>
            </li>
          )
        }
        return (
          <li
            style={indicatorStyles}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          >
            <div className="w-3 h-3 bg-gray-light border rounded-full shadow-black110"></div>
          </li>
        )
      }}
    >
      {[1, 2, 3, 4].map((index) => {
        return (
          <div
            className="bg-[#F2F2EF] text-black p-8 laptop:px-1/20 py-1/10"
            key={index}
          >
            <div className="flex flex-col items-center gap-12">
              <div className="flex flex-col items-center gap-10 laptop:w-2/3">
                <div className="flex flex-col tablet:flex-row items-center gap-6">
                  <div>
                    <img src={review_user} alt="review_user" />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-max">
                      <PopButton variant="outline">Aman Singh</PopButton>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <div className="flex gap-2">
                        <StarSVG />
                        <StarSVG />
                        <StarSVG />
                        <StarSVG />
                        <StarHalfSVG />
                      </div>
                      <p>4.5</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-cera-pro text-13 tablet:text-xl text-center">
                    Earth is the third planet from the Sun and the only
                    astronomical object known to harbor life. According to
                    radiometric dating estimation and other evidence, Earth
                    formed over 4.5 billion years ago.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </Carousel>
  )
}

export default UserReviewCarousel

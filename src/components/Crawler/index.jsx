import React from 'react'

import { ReactComponent as CrawlerStar } from '../../assets/svg/crawler_star.svg'

const List = [
  'Collectxn',
  'Sneakers',
  'Luxury',
  'Playstation',
  'Streetwear',
  'Fashion',
  'Hip hop',
  'Collectxn',
  'Sneakers',
  'Luxury',
  'Playstation',
  'Streetwear',
  'Fashion',
  'Hip hop',
]

const Crawler = () => {
  return (
    <div className="sticky bottom-0 flex py-4 bg-punchy-neon overflow-x-auto no-scrollbar">
      <div className="flex items-center px-6 gap-6">
        {List.map((item) => {
          return (
            <React.Fragment key={item}>
              <CrawlerStar />
              <div className="font-cera-pro font-medium text-2xl text-black">
                <p className="whitespace-nowrap">{item}</p>
              </div>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default Crawler

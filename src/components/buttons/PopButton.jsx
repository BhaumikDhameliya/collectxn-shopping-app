import React from 'react'

const PopButton = (props) => {
  const { children } = props
  return (
    <button className="bg-black-mate text-white flex items-center justify-center py-3 px-6 gap-[10px] rounded-3xl w-full font-medium hover:shadow-btn hover:bg-punchy-neon hover:text-black-mate ">
      {children}
    </button>
  )
}

export default PopButton

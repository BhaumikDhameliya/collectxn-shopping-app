import React from 'react'

const PopButton = (props) => {
  const { children, type, onClick, ...rest } = props

  let classes =
    'bg-black-mate flex items-center justify-center px-4 py-2 tablet:px-6 tablet:py-3 gap-[10px] rounded-full w-full font-medium text-xs tablet:text-xl text-black-mate border border-black-mate'

  const disabledClasses =
    'disabled:bg-gray-mid disabled:shadow-none disabled:text-white'
  const hoveredClasses =
    'hover:shadow-btn hover:bg-punchy-neon hover:text-black-mate '

  const outlineClasses = 'bg-white hover:bg-white'

  return (
    <button
      className={`${classes} ${disabledClasses} ${hoveredClasses} ${
        type === 'outline' ? outlineClasses : 'text-white'
      }`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export default PopButton

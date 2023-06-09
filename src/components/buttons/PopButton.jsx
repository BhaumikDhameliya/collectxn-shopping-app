import React from 'react'

const PopButton = (props) => {
  const { children, variant, onClick, btnClasses, ...rest } = props

  let classes =
    'flex items-center justify-center px-4 py-2 tablet:px-6 tablet:py-3 gap-[10px] rounded-full w-full font-medium text-xs tablet:text-xl text-black-mate border border-black-mate'

  const disabledClasses =
    'disabled:bg-gray-mid disabled:shadow-none disabled:text-white disabled:border-0'
  const hoveredClasses =
    'hover:shadow-btn hover:bg-punchy-neon hover:text-black-mate '

  const outlineClasses = 'bg-white hover:bg-white'

  return (
    <button
      className={`${classes} ${disabledClasses} ${hoveredClasses} ${
        variant === 'outline' ? outlineClasses : 'text-white'
      } ${btnClasses} text-13`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export default PopButton

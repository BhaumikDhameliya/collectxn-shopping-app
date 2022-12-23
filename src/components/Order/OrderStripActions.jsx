import React from 'react'

import PopButton from '../buttons/PopButton'

const OrderStripActions = () => {
  return (
    <div className="flex flex-col justify-center gap-3 w-full tablet:flex-row tablet:py-2">
      <PopButton btnClasses="bg-black-mate tablet:text-13">
        Give your feedback
      </PopButton>
      <PopButton variant="outline" btnClasses="tablet:text-13 tablet:py-2">
        Cancel order
      </PopButton>
    </div>
  )
}

export default OrderStripActions

import React from 'react'

const AddressCard = (props) => {
  const { address, showRadio = true } = props
  return (
    <label
      htmlFor={address.name}
      className="flex px-6 py-4 gap-5 bg-white border rounded-10"
    >
      {showRadio && (
        <div className="flex py-4">
          {/* <div className="h-5 w-5 rounded-full border border-gray-light peer-checked:border-punchy-neon"></div> */}
          <div className="h-5 w-5 rounded-full border border-punchy-neon flex items-center justify-center">
            <div className="h-2.5 w-2.5 rounded-full bg-punchy-neon"></div>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-6 flex-grow">
        <div className="flex flex-col gap-1.5 font-cera-pro font-semibold">
          <div>{address.addressLine1}</div>
          <div>{address.addressLine2}</div>
        </div>
        <div className="flex items-center justify-between text-13 font-medium">
          <div className="flex gap-4">
            <button className="border-b capitalize">edit</button>
            <button className="border-b capitalize">Remove</button>
            <button className="border-b capitalize">Make it default</button>
          </div>
          <p className="text-gray-mid">Default Address</p>
        </div>
      </div>
    </label>
  )
}

export default AddressCard

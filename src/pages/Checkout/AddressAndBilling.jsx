import React from 'react'
import PopButton from '../../components/buttons/PopButton'
import AddressCard from '../../components/Card/AddressCard'

const addressList = [
  {
    name: 'address 1',
    addressLine1: '15 Changi Business Park Cres',
    addressLine2: 'Bidadari Park Drive - Singapore',
  },
  {
    name: 'address 2',
    addressLine1: '18 Changi Business Park Cres',
    addressLine2: 'Park Drive - India',
  },
]

const AddressAndBilling = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col px-4 pt-4 pb-6 gap-4">
        <div className="flex justify-between py-4 pt-4 pb-6 gap-4">
          <p className="font-bold text-xl">Shipping Address</p>
          <div>
            <PopButton btnClasses="bg-black-mate">Add address</PopButton>
          </div>
        </div>
        {addressList.map((address, index) => {
          return (
            <div className="" key={index}>
              <input
                type="checkbox"
                id={address.name}
                name={address.name}
                className="accent-black-mate peer hidden"
              />
              <AddressCard address={address} />
            </div>
          )
        })}
      </div>
      <div className="flex flex-col px-4 py-6 border-t border-gray-light">
        <div className="flex pb-3">
          <p className="font-bold text-xl">Billing</p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col pt-2.5 pb-5 border-b gap-2.5 flex-grow">
            <div className="flex items-center justify-between flex-grow gap-2.5">
              <p>Price (2 items)</p>
              <p>₹21,398.00</p>
            </div>
            <div className="flex items-center justify-between flex-grow gap-2.5">
              <p>Discount on MRP</p>
              <p>-₹5000.00</p>
            </div>
            <div className="flex items-center justify-between flex-grow gap-2.5">
              <p>Delivery Charges</p>
              <p>Free</p>
            </div>
          </div>
          <div className="flex items-center justify-between flex-grow font-cera-pro font-bold gap-2.5 py-3">
            <p>Total Amount</p>
            <p>₹16,398.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddressAndBilling

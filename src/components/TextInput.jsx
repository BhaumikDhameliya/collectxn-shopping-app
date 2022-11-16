import React from 'react'

const TextInput = (props) => {
  const { labelText, error = false } = props
  return (
    <div className="flex flex-col w-full mt-6">
      <label htmlFor="">{labelText}</label>
      <input
        type="text"
        className="py-3 px-6 border rounded-3xl border-black-mate"
      />
      {error && (
        <div className="px-4 py-[6px] text-[13px] text-error">
          <p>{`User already registered. Try to login :)`}</p>
        </div>
      )}
    </div>
  )
}

export default TextInput

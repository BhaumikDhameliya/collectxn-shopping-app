import React from 'react'

const TextInput = (props) => {
  const { labelText, error = false, placeholder, labelClasses, ...rest } = props
  return (
    <div className="flex flex-col w-full">
      {labelText && (
        <label htmlFor="" className={`${labelClasses}`}>
          {labelText}
        </label>
      )}
      <input
        type="text"
        className="py-3 px-6 border rounded-3xl border-black-mate"
        placeholder={placeholder}
        {...rest}
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

import React from 'react'

const TextInput = (props) => {
  const {
    labelText,
    error,
    placeholder,
    labelClasses,
    name,
    buttonText,
    onButtonClick,
    register,
    errors,
    ...rest
  } = props
  return (
    <div className="flex flex-col w-full">
      {labelText && (
        <label htmlFor={name} className={`font-medium ${labelClasses}`}>
          {labelText}
        </label>
      )}
      <div className="flex flex-col w-full relative">
        <input
          type="text"
          className="py-3 px-6 border rounded-3xl border-black-mate"
          name={name}
          placeholder={placeholder}
          {...(register ? register(name) : {})}
          {...rest}
        />
        {buttonText && (
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2"
            onClick={onButtonClick}
          >
            <div className="font-cera-pro font-medium text-pink">
              {buttonText}
            </div>
          </button>
        )}
      </div>
      {errors && errors[name] && (
        <div className="px-4 py-[6px] text-[13px] text-error">
          <p>{errors[name]['message']}</p>
        </div>
      )}
    </div>
  )
}

export default TextInput

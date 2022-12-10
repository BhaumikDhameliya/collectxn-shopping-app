import React from 'react'

const SelectInput = (props) => {
  const {
    name,
    labelText,
    placeholder,
    labelClasses,
    selectClasses,
    options = [],
    defaultValue,
    ...rest
  } = props
  return (
    <div className="flex flex-col w-full gap-1.5">
      {labelText && (
        <label htmlFor={name} className={`${labelClasses}`}>
          {labelText}
        </label>
      )}
      <select
        name={name}
        type="text"
        className={`py-3 pl-6 pr-11 border rounded-3xl border-black-mate appearance-none bg-transparent bg-[url('/src/assets/svg/caret_down.svg')] bg-no-repeat bg-select-caret ${selectClasses}`}
        placeholder={placeholder}
        {...rest}
        defaultValue={defaultValue || ''}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}

        {options.map((opt) => {
          return (
            <option value={opt.value} key={opt.value}>
              {opt.name}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default SelectInput

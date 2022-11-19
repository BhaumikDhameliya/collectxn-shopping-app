import * as React from 'react'

const ViewAllArrow = ({ fill = '#000', rest }) => (
  <svg
    width={21}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M1.5 5.75H.75v1.5h.75v-1.5Zm0 1.5h17.495v-1.5H1.5v1.5ZM13.924.5c0 3.707 2.924 6.75 6.576 6.75v-1.5c-2.782 0-5.076-2.33-5.076-5.25h-1.5ZM20.5 5.75c-3.652 0-6.576 3.043-6.576 6.75h1.5c0-2.92 2.294-5.25 5.076-5.25v-1.5Z"
      fill={fill}
    />
  </svg>
)

export default ViewAllArrow

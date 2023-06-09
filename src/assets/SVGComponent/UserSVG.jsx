import * as React from 'react'

const UserSVG = ({ fill = '#FFFFFF', ...props }) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 8a5 5 0 1 1 10 0A5 5 0 0 1 7 8Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6.343 16.343A8 8 0 0 0 4 22h2a6 6 0 1 1 12 0h2a8 8 0 0 0-13.657-5.657Z"
      fill={fill}
    />
  </svg>
)

export default UserSVG

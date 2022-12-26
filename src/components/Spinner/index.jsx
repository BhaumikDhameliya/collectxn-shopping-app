import React from 'react'

const Spinner = () => {
  return (
    <div className="flex items-center justify-center w-full p-2">
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
        role="status"
      >
        <span className="visually-hidden sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner

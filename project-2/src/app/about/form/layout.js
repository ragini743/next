import React from 'react'

const layout = ({children}) => {
  return (
    <div className=''>
        <p>I am form layout
            {children}
        </p>
    </div>
  )
}

export default layout
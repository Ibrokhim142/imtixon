import React from 'react'

const Button = ({children, btnType}) => {
  return (
    <button className='btn' type={btnType}>{children}</button>
  )
}

export default Button

import React from 'react'

function Button({
    children, //text
    type = 'button',
    bgColor = 'bg-blue-500',
    hover = 'hover:bg-blue-700',
    textColor = 'text-white',
    fontSize = 'text-sm',
    fontWeight = 'font-semibold',
    rounded = 'rounded-lg',
    className='',
    ...props

}) {
  return (
    <button className={`px-4 py-2.5 ${bgColor} ${hover} ${textColor} ${fontSize} ${fontWeight} ${rounded} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button
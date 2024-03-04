import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div>
      <img width={width} alt="" src="images/logo.png" />
    </div>
  )
}

export default Logo
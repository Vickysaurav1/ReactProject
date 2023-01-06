import React from 'react'

import './style.css'

function Button({child, onclick, classn}) {
  return (
    <>
        <button className={classn} onClick={onclick}>{child}</button>
    </>
  )
}

export default Button
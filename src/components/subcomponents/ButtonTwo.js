import React from 'react'

const ButtonTwo = ({val, decreHandler}) => {
  return (
    <React.Fragment>
        <button className='count_btn' onClick={() => decreHandler()}>{val}</button>
    </React.Fragment>
  )
}

export default ButtonTwo

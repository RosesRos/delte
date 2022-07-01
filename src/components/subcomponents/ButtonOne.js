import React from 'react'

const ButtonOne = ({val, increHandler}) => {
  return (
    <React.Fragment>
        <button className='count_btn' onClick={() => increHandler()}>{val}</button>
    </React.Fragment>
  )
}

export default ButtonOne;

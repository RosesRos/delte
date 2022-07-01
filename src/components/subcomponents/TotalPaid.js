import React from 'react'

const TotalPaid = ({total}) => {
  return (
    <React.Fragment>
        <p className='card_total'>$ {total}</p>
    </React.Fragment>
  )
}

export default TotalPaid;

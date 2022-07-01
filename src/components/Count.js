import React, { useState } from 'react';

// styles 
import '../styles/Count.scss';


const Count = () => {

  const [count, setCount] = useState(0);

  const resul = () => {
    if (count >= 10) {
      return count
    } else if (count <= 0) {
      return count
    } else {
      return '0' + count
    }
  }

  const increment = () => {
    setCount((prev) => prev + 1);
  }

  const decrement = () => {
    if (count <= 0) {
      setCount((prev) => prev = 0)
    } else {
      setCount((prev) => prev - 1);
    }
  }


  return (
    <div className='count'>
        <button className='count_btn' onClick={() => increment()}>+</button>
        <span className='count_res'>{ resul() }</span>
        <button className='count_btn' onClick={() => decrement()}>-</button>
    </div>
  )
}

export default Count

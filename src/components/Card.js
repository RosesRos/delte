import React, { useState } from 'react';
import Shoe from '../assets/shoes.png';

// styles
import '../styles/_Card.scss';
import '../styles/Count.scss';

//components

import Title from './Title';
import CardTwo from './CardTwo';
import ButtonOne from './subcomponents/ButtonOne';
import ButtonTwo from './subcomponents/ButtonTwo';
import TotalPaid from './subcomponents/TotalPaid';

const Card = () => {

  const [count, setCount] = useState(1);
  const [total] = useState(23);

  const resul = () => {
    if (count >= 10) {
      return count
    } else if (count <= 0) {
      return count
    } else {
      return '0' + count
    }
  }

  const Total = () => {
    return total * count;
  }

  const increment = () => {
    setCount((prev) => prev + 1);
  }

  const decrement = () => {
    if (count <= 0) {
      setCount((prev) => prev = 0);
    } else {
      setCount((prev) => prev - 1);
    }
  }


  return (
    <div className='card'>
        <div className='card_content'>
          <div className='card_item'>
            <div className='card_item_img'>
              <img className='card_img' src={Shoe} alt="Shoe" />
            </div>
          </div>
          <div className='card_item'>
            <Title title='Nike Revolution 5'/>
            <p className='card_subtitle'>Men's Running Shoes</p>
            <div className='card_popups'>
              <span className='card_popups_items'>Size: UK 8</span>
              <span className='card_popups_items'>color: </span>
            </div>
            <TotalPaid total={Total()}/>
          </div>
          <div className='card_item'>
            <div className='count'>
              <ButtonOne val='+' increHandler={() => increment()}/>
              <span className='count_res'>{ resul() }</span>
              <ButtonTwo val='-' decreHandler={() => decrement()}/>
            </div>
          </div>
        </div>
        <CardTwo />
    </div>
  )
}

export default Card

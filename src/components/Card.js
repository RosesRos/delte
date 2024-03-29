import React, { useState } from 'react';
import Shoe from '../assets/shoes.png';
import { createUseStyles } from 'react-jss';


// Store-Count

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCount } from '../store/features/counter/CounterSlice'; 

//components

import Title from './Title';
import CardTwo from './CardTwo';
import ButtonOne from './subcomponents/ButtonOne';
import ButtonTwo from './subcomponents/ButtonTwo';
import TotalPaid from './subcomponents/TotalPaid';


const useStyles = createUseStyles({
  card: {
    position: 'relative',
  },
  
})

const Card = () => {

  const classes = useStyles();

  const count = useSelector(selectCount);
  const dispatch = useDispatch();

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

  const Increment = () => {
    dispatch(increment())
  }

  const Decrement = () => {
    if (count <= 0) {
      return count;
    } else {
      dispatch(decrement())
    }
  }

  return (
    <div className={classes.card}>
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
              <ButtonOne val='+' increHandler={() => Increment()}/>
              <span className='count_res'>{ resul() }</span>
              <ButtonTwo val='-' decreHandler={() => Decrement()}/>
            </div>
          </div>
        </div>
        <CardTwo />
    </div>
  )
}

export default Card

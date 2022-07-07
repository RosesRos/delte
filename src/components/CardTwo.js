// styles 
import '../styles/_CardTwo.scss';
import '../styles/_Variables.scss';

import React from 'react';
import { createUseStyles } from 'react-jss';
import { flipInY } from 'react-animations';
import { flipInX } from 'react-animations';
import { motion } from 'framer-motion';


const mobilLandscape = 850;
const mobilSmLandscape = 650; 
const mobil = 480;
const mobilSm = 390;


const useStyles = createUseStyles({
  '@keyframes flipInY': flipInY,
  cardTwo: {
    animationName: `$flipInY`,
    animationDuration: '2s',
    position: 'relative',
    '&::before': {
      display: 'block',
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: -1,
      height: '100%',
      width: '100%',
      background: 'rgba(255, 0, 0, 1)',
      transition: ['width', '0.4s', 'ease-in-out']
    },
    '&:hover::before': {
      width: '360%',
      zIndex: 5,
    }
  },
  [`@media (max-width: ${mobilLandscape}px)`] : {
    '@keyframes flipInX': flipInX,
    cardTwo: {
      animationName: '$flipInX',
      animationDuration: '2s', 
      '&::before': {
        display: 'none',
      },
      '&::after': {
        bottom: 0,
        transition: ['height', '0.4s', 'ease-in-out'],
        display: 'block',
        content: "''",
        position: 'absolute',
        right: 0,
        zIndex: -1,
        height: '100%',
        width: '100%',
        background: 'rgba(255, 0, 0, 1)',
      },
      '&:hover::after': {
        height: '230%',
        zIndex: 5,
      }
    }
  },
  [`@media (max-width:${mobilSmLandscape}px)`]: {
    cardTwo: {
      '&:hover::after': {
        height: '430%',
        zIndex: 5,
      }
    }
  },
  [`@media (max-width:${mobil}px)`]: {
    cardTwo: {
      '&:hover::after': {
        height: '400%',
        zIndex: 5,
      }
    }
  },
  [`@media (max-width:${mobilSm}px)`]: {
    cardTwo: {
      '&:hover::after': {
        height: '370%',
        zIndex: 5,
      }
    }
  },
})



const CardTwo = () => {

  const classes = useStyles();

  return (
    <motion.div className={classes.cardTwo}>
      <div className='cardTwo_item'>
        <div className='cardTwo_delete'>
          <h3>hello card two</h3>
        </div>
      </div>
    </motion.div> 
  )
}


export default CardTwo

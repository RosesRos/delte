// styles 
// import '../styles/_CardTwo.scss';
// import '../styles/_Variables.scss';

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
      content: '"The Card Was Hide"',
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: -1,
      height: '100%',
      width: '100%',
      background: 'rgba(255, 0, 0, 1)',
      paddingTop: '5rem',
      transition: ['width', '0.4s', 'ease-in-out']
    },
    '&:hover::before': {
      width: '360%',
      zIndex: 5,
    },
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
        content: "'The Card Was Hide'",
        position: 'absolute',
        right: 0,
        zIndex: -1,
        height: '100%',
        width: '100%',
        background: 'rgba(255, 0, 0, 1)',
        paddingTop: '5rem',
      },
      '&:hover::after': {
        height: '320%',
        zIndex: 5,
      }
    }
  },
  [`@media (max-width:${mobilSmLandscape}px)`]: {
    cardTwo: {
      '&:hover::after': {
        height: '660%',
        zIndex: 5,
      }
    }
  },
  [`@media (max-width:${mobil}px)`]: {
    cardTwo: {
      '&:hover::after': {
        height: '600%',
        zIndex: 5,
      }
    }
  },
  [`@media (max-width:${mobilSm}px)`]: {
    cardTwo: {
      '&:hover::after': {
        height: '560%',
        zIndex: 5,
      }
    }
  },
});

function ToggleContent({ header}) {

  const classes = useStyles();

  return (
    <React.Fragment>
      <motion.h2 className={classes.delete}>{header}</motion.h2>
    </React.Fragment>
  )
}


const CardTwo = () => {

  const classes = useStyles();

  return (
    <motion.div layout className={classes.cardTwo}>
      <div className='cardTwo_item'>
        <ToggleContent header='Hide the Card'/>
      </div>
    </motion.div> 
  )
}

export default CardTwo

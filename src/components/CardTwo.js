// styles 
import '../styles/_CardTwo.scss';
import '../styles/_Variables.scss';

import React from 'react';
import { createUseStyles } from 'react-jss';
import { flipInY } from 'react-animations';
import { flipInX } from 'react-animations';
import { motion } from 'framer-motion';


const mobilLandscape = 850; 


const useStyles = createUseStyles({
  '@keyframes flipInY': flipInY,
  cardTwo: {
    animationName: `$flipInY`,
    animationDuration: '2s',
  },
  [`@media (max-width: ${mobilLandscape}px)`] : {
    '@keyframes flipInX': flipInX,
    cardTwo: {
      animationName: '$flipInX',
      animationDuration: '2s',
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

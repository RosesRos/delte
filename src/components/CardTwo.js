// styles 
import '../styles/CardTwo.scss';
import '../styles/Variables.scss';

import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { flipInY } from 'react-animations';
import { motion } from 'framer-motion';

// const bounceAnimation = styled`${bounce}`;

const useStyles = createUseStyles({
  '@keyframes flipInY': flipInY,
  cardTwo: {
    animationName: `$flipInY`,
    animationDuration: '5s',
    // maxWidth: '25rem',
  },
})

const variants = {
  visible: {
    maxWidth: '100%',
    height: 0,
    padding: 0,
  },
  hidden: {
    maxWidth: '25rem',
  },
}



const CardTwo = () => {

  const [ click, setClick ] = useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setClick((prev) => prev = !click)
  }

  return (
    <motion.div click={+click} className={classes.cardTwo} initial='hidden' animate={click ? 'visible' : 'hidden'}
    transition={{ duration: 2 }} variants={variants}>
      <div className='cardTwo_item' onClick={() => handleClick()}>
        <div className='cardTwo_delete'>
          <h3 >hello card two</h3>
        </div>
      </div>
    </motion.div> 
  )
}

export default CardTwo

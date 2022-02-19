import { useState, useEffect } from 'react';
import classes from './Menu.module.css';
import menu from '../../data';

const Menu = () => {

  const [ myMenu, setMyMenu ] = useState(menu);
  
  return (
    <div className={classes.menu}>
      
    </div>
  )
}

export default Menu
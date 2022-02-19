import { useState, useEffect } from 'react';
import classes from './Menu.module.css';
import menu from '../../data';
import Categories from '../Categories/Categories'

const Menu = () => {

  const [ myMenu, setMyMenu ] = useState(menu);
  
  return (
    <div className={classes.menu}>
      <h2>Make your pick</h2>
      <Categories />
    </div>
  )
}

export default Menu
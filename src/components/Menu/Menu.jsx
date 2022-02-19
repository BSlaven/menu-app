import { useState, useEffect } from 'react';
import classes from './Menu.module.css';
import menu from '../../data';
import Categories from '../Categories/Categories'

const Menu = () => {

  const [ myMenu, setMyMenu ] = useState(menu);
  const categories = menu.map(elem => elem.category);
  
  return (
    <div className={classes.menu}>
      <h2>Make your pick</h2>
      <Categories categories={categories} />
    </div>
  )
}

export default Menu
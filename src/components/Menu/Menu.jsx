import { useState, useEffect } from 'react';
import classes from './Menu.module.css';
import menu from '../../data';
import Categories from '../Categories/Categories'

const Menu = () => {

  const [ myMenu, setMyMenu ] = useState(menu);
  const categories = [...new Set(menu.map(elem => elem.category))];

  const filterMenu = category => {
    const newMenu = [...myMenu].filter(elem => elem.category === category);
    setMyMenu(newMenu);
  }
  
  return (
    <div className={classes.menu}>
      <h2>Make your pick</h2>
      <Categories categories={categories} click={filterMenu} />
    </div>
  )
}

export default Menu
import { useState, useEffect } from 'react';
import classes from './Menu.module.css';
import menu from '../../data';
import Categories from '../Categories/Categories';
import MenuItem from '../MenuItem/MenuItem';

const Menu = () => {

  const [ filterCategory, setFilterCategory ] = useState('');
  const [ myMenu, setMyMenu ] = useState([]);
  const categories = [...new Set(menu.map(elem => elem.category))];

  const filterMenu = category => {
    setFilterCategory(category);
  }
  
  useEffect(() => {
    if(!filterCategory) {
      setMyMenu(menu);
    } else {
      const newMenu = menu.filter(elem => elem.category === filterCategory)
      setMyMenu(newMenu);
    }
  }, [filterCategory]);
  
  return (
    <div className={classes.menu}>
      {myMenu && myMenu.map(item => <MenuItem key={item.id} item={item}>{item.title}</MenuItem>)}
    </div>
  )
}

export default Menu
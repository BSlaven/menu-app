import { useState, useEffect } from 'react';
import classes from './Menu.module.css';
import menu from '../../data';
import Categories from '../Categories/Categories'

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
      <h2>Make your pick</h2>
      <Categories categories={categories} click={filterMenu} />
      {myMenu && myMenu.map(item => <p>{item.title}</p> ) }
    </div>
  )
}

export default Menu
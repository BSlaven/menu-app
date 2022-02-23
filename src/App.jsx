import { useState, useEffect } from 'react';
import classes from './App.module.css'
import Menu from './components/Menu/Menu'
import Categories from './components/Categories/Categories';
import menu from './data';

function App() {

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
    <div className={classes.App}>
      <h2>Make your pick</h2>
      <Categories categories={categories} click={filterMenu} />
      <Menu myMenu={myMenu} />
    </div>
  )
}

export default App

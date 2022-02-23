import classes from './Menu.module.css';
import MenuItem from '../MenuItem/MenuItem';

const Menu = ({ myMenu }) => {  
  return (
    <div className={classes.menu}>
      {myMenu && myMenu.map(item => <MenuItem key={item.id} item={item}>{item.title}</MenuItem>)}
    </div>
  )
}

export default Menu
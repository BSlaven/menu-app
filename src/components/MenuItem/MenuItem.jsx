import classes from './MenuItem.module.css';

const MenuItem = ({ item }) => {
  return (
    <div className={classes.item}>
      <img src={item.img} alt={item.title} />
    </div>
  )
}

export default MenuItem
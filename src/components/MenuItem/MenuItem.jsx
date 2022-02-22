import classes from './MenuItem.module.css';

const MenuItem = ({ item }) => {
  return (
    <div className={classes.item}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={item.img} alt={item.title} />
      </div>
      <div className={classes.contentContainer}>
        <p>{item.title} <span>{item.price}</span></p>
        <p>{item.desc}</p>
      </div>
    </div>
  )
}

export default MenuItem
import classes from './MenuItem.module.css';

const MenuItem = ({ item }) => {
  return (
    <div className={classes.item}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={item.img} alt={item.title} />
      </div>
      <div className={classes.contentContainer}>
        <p className={classes.title}>
          <span>{item.title}</span>
          <span className={classes.price}>
            {item.price}
          </span>
        </p>
        <p className={classes.description}>{item.desc}</p>
      </div>
    </div>
  )
}

export default MenuItem
import classes from './Category.module.css';

const Category = ({ category }) => {
  return (
    <button 
      className={classes.category}
    >
      {category}
    </button>
  )
}

export default Category
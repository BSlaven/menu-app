import Category from '../Category/Category';
import classes from './Categories.module.css';

const Categories = ({ categories }) => {
  
  return (
    <div className={classes.categories}>
      {categories.map(category => <Category key={category.id} category={category} />)}
    </div>
  )
}

export default Categories
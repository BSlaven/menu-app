import Category from '../Category/Category';
import classes from './Categories.module.css';

const Categories = ({ categories, click }) => {
  
  return (
    <div className={classes.categories}>
      {categories.map(category => <Category click={click} key={category.id} category={category} />)}
    </div>
  )
}

export default Categories
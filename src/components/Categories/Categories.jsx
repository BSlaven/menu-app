import Category from '../Category/Category';
import classes from './Categories.module.css';

const Categories = ({ categories, click }) => {
  
  return (
    <div className={classes.categories}>
      <button className={classes.category} onClick={() => click('')} >All</button>
      {categories.map(category => <Category click={click} key={category} category={category} />)}
    </div>
  )
}

export default Categories
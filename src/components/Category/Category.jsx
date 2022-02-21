import classes from './Category.module.css';

const Category = ({ category, click }) => {

  const categoryClickHandler = () => {
    click(category);
    console.log('kliknuo si na kategoriju: ', category);
  }
  
  return (
    <button 
      onClick={categoryClickHandler}
      className={classes.category}
    >
      {category}
    </button>
  )
}

export default Category
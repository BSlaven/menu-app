import Category from '../Category/Category';

const Categories = ({ categories }) => {
  
  return (
    <div>
      {categories.map(category => <Category category={category} />)}
    </div>
  )
}

export default Categories
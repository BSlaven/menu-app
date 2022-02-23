import classes from './App.module.css'
import Menu from './components/Menu/Menu'

function App() {

  return (
    <div className={classes.App}>
      <h2>Make your pick</h2>
      <Categories categories={categories} click={filterMenu} />
      <Menu />
    </div>
  )
}

export default App

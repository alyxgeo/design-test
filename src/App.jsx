import Banner from './components/Banner/Banner'
import TopBrand from './components/Brands/TopBrand'
import Navbar from './components/NavBar/Navbar'
import Products from './components/Products/Products'

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Products />
      <TopBrand />
    </div>
  )
}

export default App
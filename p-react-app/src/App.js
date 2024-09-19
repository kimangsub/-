import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Categories from './Category';
import Products from './Product';
import ProductDetail from './ProductDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/categories' element={<Categories />} />
        <Route path='/categories/:categoryId' element={<Products />} />
        <Route path='/categories/:categoryId/products/:productId' element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import P_info from './p_info';
import AddProduct from './AddProduct';


function App() {

  return (
    <div className="App">
      <P_info />
      <AddProduct />
    </div>
  );
}

export default App;

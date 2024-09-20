import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:lang/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import Laptops from './components/Laptops/Laptops';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Laptops></Laptops>
    </div>
  );
}

export default App;

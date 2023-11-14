import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Order from './components/Order';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Order/>
    </div>
  );
}

export default App;

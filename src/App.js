import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Navigation/>
    </div>
  );
}

export default App;

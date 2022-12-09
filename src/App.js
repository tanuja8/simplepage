import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import Imagearea1 from './component/Imagearea1';
import End from './component/End';






function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Imagearea1></Imagearea1>
      <End/>
    </div>
  );
}

export default App;

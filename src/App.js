import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import Imagearea1 from './component/Imagearea1';
import End from './component/End';
import { Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Imagearea1/>}/>
      </Routes>
      <End/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home'; 
import Profile from './pages/profile/profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
        <div className="blur" style={{top:'-10%' ,right:'0'}}></div>
        <div className="blur" style={{top:'36%',left:'-8rem'}}></div> 
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;

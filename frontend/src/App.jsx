import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Landing from './component/FunctionalComponent/Landing'
import Login from './component/FunctionalComponent/Login';
import Home from './component/FunctionalComponent/Home'; 
import Carpentry from './component/FunctionalComponent/Carpentry';
import Adminlogin from './component/FunctionalComponent/Adminlogin';
import Adminhome from './component/FunctionalComponent/Adminhome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/slogin" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ahome" element={<Adminhome />} />
        <Route path="/carpentry" element={<Carpentry />} />
        <Route path="/alogin" element={<Adminlogin/>}/>
      </Routes>
    </Router>
  );
}

export default App;

import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from './components/Home';

function App() {
  const [username,setusername] = useState("")
  return (
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}/>
          <Route path="/log" element={<Login />} />
          <Route path="/home" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header.jsx";
import Form from "./pages/Form.jsx";
import ParkingLot from "./pages/ParkingLot.jsx";
import List from "./pages/List.jsx";
import "./App.css";

function App() {
  return(
    <div className="App">
    <Routes>
      <Route path="/" exact Component={Header}/>
      <Route path="/cadastro" exact Component={Form}/>
      <Route path="/vagas" exact Component={ParkingLot}/>
      <Route path="/lista" exact Component={List}/>
    </Routes>
    </div>
  );
}

export default App

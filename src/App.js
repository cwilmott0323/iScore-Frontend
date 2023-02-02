// import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Locations from "./Locations";
import Login from "./Login";
import React from "react";
import England from "./England"
import NewZealand from "./NewZealand"
const App = () => {

    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/login" element={<Login/>}/>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/locations" element={<Locations/>}/>
                    <Route exact path="/locations/england" element={<England/>}/>
                    <Route exact path="/locations/newzealand" element={<NewZealand/>}/>
                </Routes>
            </Router>
        </div>
    );
}
export default App

import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Countries from "./Countries";
import Login from "./Login";
import React from "react";
import Country from "./Country"
import City from "./City";
const App = () => {

    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/login" element={<Login/>}/>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/countries" element={<Countries/>}/>
                    <Route exact path="/countries/:country/cities" element={<Country/>}/>
                    <Route exact path="/countries/:country/cities/:city" element={<City/>}/>
                </Routes>
            </Router>
        </div>
    );
}
export default App

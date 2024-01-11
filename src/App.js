import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './common/colors.css'
import Header from './features/header'
import About from './features/about'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sponsors from "./features/sponsors";
import Events from "./features/events";
import Committee from "./features/committee";
import Contact from "./features/contact";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={
                    <div className="App">
                        <Header page="main" />
                        <About page="main"/>
                        <Sponsors />
                        <Events page="main"/>
                        <Committee />
                        <Contact />
                    </div>
                } />
                <Route path="/women-in-trading" element={
                    <div className="App">
                        <Header page="womenInTrading" />
                        <About page="womenInTrading"/>
                        <Events page="womenInTrading"/>
                    </div>
                } />
            </Routes>
        </Router>
    );
}

export default App;

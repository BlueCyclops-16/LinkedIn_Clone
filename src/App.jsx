import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login/>} />
                <Route exact path="/home" element={<><Header/><Home/></>} />
            </Routes>
        </Router>
    ); 
}

export default App;
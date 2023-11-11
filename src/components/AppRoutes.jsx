import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import HistoricalGames from './HistoricalGames';
import About from './About';

class AppRoutes extends Component {

    render() {
        return(
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/historic' element={<HistoricalGames/>}></Route>
                <Route path='/about' element={<About/>}></Route>
            </Routes>
        )
    }

}

export default AppRoutes;
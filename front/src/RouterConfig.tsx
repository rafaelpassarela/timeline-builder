import React, { Component } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home/HomeComponent";
import TimeLine from "./pages/TimeLineComponent";
import UserRegister from "./pages/UserRegisterComponent";

class RouterConfig extends Component {

    render() {
        return (
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/tl' element={<TimeLine/>} />
                <Route path='/user' element={<UserRegister/>} />
            </Routes>
        );
    }

}

export default RouterConfig;
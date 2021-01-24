import React, { useState } from 'react';
import './FormPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './forms/header';
import Login from './forms/Login'
import Signup from './forms/Signup'
import Home from './forms/home';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
// import AlertComponent from './components/AlertComponent/AlertComponent';

function FormPage() {
    // const [title, updateTitle] = useState(null);
    // const [errorMessage, updateErrorMessage] = useState(null);
    return (
        <div className="FormPage">
            {/* <Header title={title} /> */}
            <Login />
            <Signup />
            <Home />
        </div>
    )
}

export default FormPage;
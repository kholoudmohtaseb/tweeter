import React, { useState } from 'react';
import './FormPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Login'
import Signup from './Signup'

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
        </div>
    )
}

export default FormPage;